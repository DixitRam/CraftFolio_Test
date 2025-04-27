"use client"

import { Form } from "@/components/ui/form"
import { CiImageOn } from "react-icons/ci";
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BsPersonBoundingBox } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import { useState, useEffect } from 'react'

const formSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  template: z.string().default("Marc"),
  name: z.string().min(2, {
    message: "Profile name must be at least 2 characters.",
  }),
  profile_picture: z.string().url({
    message: "Please enter a valid image URL",
  }),
  location: z.string().min(10,{
    message: "Location must be at least 10 characters.",
  }),
  cvURL: z.string().url({
    message: "Please enter a valid URL",
  }).optional(),
  contact: z.object({
    email: z.string().email({
      message: "Please enter a valid email address",
    }),
    linkedin: z.string().url({
      message: "Please enter a valid LinkedIn URL",
    }),
    github: z.string().url({
      message: "Please enter a valid GitHub URL",
    }),
  }),
  tagline: z.string().min(2, {
    message: "Tag line must be at least 2 characters",
  }),
  about_me: z.string().min(10, {
    message: "About me must be at least 10 characters",
  }),
  skill: z.string().min(2, {
    message: "Please enter at least one skill",
  })
});

type FormData = z.infer<typeof formSchema>;

export default function EditProfileForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      template: "Marc",
      name: "",
      profile_picture: "",
      location: "",
      cvURL: "",
      contact: {
        email: "",
        linkedin: "",
        github: "",
      },
      tagline: "",
      about_me: "",
      skill: ""
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        console.log('Fetching profile data...');
        console.log('userId:', userId);
        const response = await fetch(`/api/profile/${userId}`);
        const data = await response.json();

        if (response.ok && data.success) {
          const formattedData = {
            ...data.data,
            skill: Array.isArray(data.data.skills) 
              ? data.data.skills.join(' - ') 
              : '',
            contact: {
              email: data.data.contact?.email || '',
              linkedin: data.data.contact?.linkedin || '',
              github: data.data.contact?.github || '',
            }
          };
          form.reset(formattedData);
        }
      } catch (error) {
        console.error('Error fetching profile data:', error);
        toast.error('Failed to load profile data');
      } finally {
        setIsFetching(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId, form]);

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const formattedData = {
        ...data,
        skills: data.skill.split('-').map(skill => skill.trim())
      };
      
      const response = await fetch(`/api/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update profile');
      }

      toast.success('Profile updated successfully!');
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to update profile');
      console.error('Error details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-primary"></div>
          <p className="mt-4 text-gray-600">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex items-center gap-4 mb-8">  
          <Avatar className="h-24 w-24">
            <AvatarImage 
              src={form.getValues("profile_picture")} 
              alt="Profile picture" 
            />
            <AvatarFallback className="text-3xl">
              <BsPersonBoundingBox />
            </AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-2">
            <FormField
              control={form.control}
              name="profile_picture"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input 
                      placeholder="Enter image URL" 
                      {...field} 
                      className="w-full"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button 
              type="button" 
              className="flex items-center gap-2 bg-blue-100 text-custom-primary hover:bg-custom-primary hover:text-white"
              onClick={() => {
                // You can add image upload functionality here
                toast.info("Image upload functionality to be implemented");
              }}
            >
              <CiImageOn className="w-5 h-5" />
              Upload Image
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location</FormLabel>
                <FormControl>
                  <Input placeholder="City, Country" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact.email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="cvURL"
            render={({ field }) => (
              <FormItem>
                <FormLabel>CV URL</FormLabel>
                <FormControl>
                  <Input placeholder="https://..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact.linkedin"
            render={({ field }) => (
              <FormItem>
                <FormLabel>LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="https://linkedin.com/in/..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="contact.github"
            render={({ field }) => (
              <FormItem>
                <FormLabel>GitHub</FormLabel>
                <FormControl>
                  <Input placeholder="https://github.com/..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="tagline"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tag Line</FormLabel>
              <FormControl>
                <Input placeholder="Full Stack Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="skill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Skills</FormLabel>
              <FormControl>
                <Input placeholder="React - Next.js - TypeScript" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="about_me"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell us about yourself..." 
                  {...field}
                  className="min-h-[150px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button 
          type="submit"
          className="w-full bg-custom-primary text-white hover:bg-custom-primary/90"
          disabled={isLoading}
        >
          {isLoading ? 'Updating...' : 'Update Profile'}
        </Button>
      </form>
    </Form>
  );
}
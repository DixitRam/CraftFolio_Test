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
  name: z.string().min(2, {
    message: "Profile name must be at least 2 characters.",
  }),
  location: z.string().optional(),
  cvURL: z.string().url({
    message: "Please enter a valid URL",
  }),
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  linkedin: z.string().url({
    message: "Please enter a valid LinkedIn URL",
  }),
  github: z.string().url({
    message: "Please enter a valid GitHub URL",
  }),
  profile_summary: z.string().optional(),
  tagLine: z.string().min(2, {
    message: "Tag line must be at least 2 characters",
  }),
  aboutMe: z.string().optional(),
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
      name: "",
      location: "",
      cvURL: "",
      email: "",
      linkedin: "",
      github: "",
      profile_summary: "",
      tagLine: "",
      aboutMe: "",
      skill: ""
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`/api/profile/${userId}`);
        const data = await response.json();

        if (response.ok && data.success) {
          // Format the data for the form
          const formattedData = {
            ...data.data,
            skill: Array.isArray(data.data.skills) 
              ? data.data.skills.join(' - ') 
              : data.data.skill || ''
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
            <AvatarImage src="" />
            <AvatarFallback className="text-3xl">
              <BsPersonBoundingBox />
            </AvatarFallback>
          </Avatar>
          <Button 
            type="button" 
            className="flex items-center gap-2 bg-blue-100 text-custom-primary hover:bg-custom-primary hover:text-white"
          >
            <CiImageOn className="w-5 h-5" />
            Update Image
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
            name="email"
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
            name="linkedin"
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
            name="github"
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
          name="tagLine"
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
          name="profile_summary"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Summary</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="A brief summary of your professional profile..." 
                  {...field}
                  className="min-h-[100px]"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="aboutMe"
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
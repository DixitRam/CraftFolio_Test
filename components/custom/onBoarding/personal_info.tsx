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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from 'sonner'
import { useState } from 'react'



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
})

type FormData = z.infer<typeof formSchema>;

export default function ProfileForm() {
  const [isLoading, setIsLoading] = useState(false);

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
  })

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const formattedData = {
        ...data,
        skills: data.skill.split('-').map(skill => skill.trim())
      };
      
      const response = await fetch('/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to save profile');
      }

      toast.success('Profile saved successfully!');
      console.log('Saved profile:', result.profile); // Debug log
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to save profile. Please try again.');
      console.error('Error details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-4 mb-8">  
          <Avatar className="h-24 w-24">
            <AvatarImage src={form.watch("profile_picture")} />
            <AvatarFallback className="text-3xl">
              <BsPersonBoundingBox />
            </AvatarFallback>
          </Avatar>
          <FormField
            control={form.control}
            name="profile_picture"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Profile Picture URL" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} className="w-full" />
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
                <FormLabel className="text-base">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Profile Name" {...field} className="w-full" />
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
                <FormLabel className="text-base">Location</FormLabel>
                <FormControl>
                  <Input placeholder="Your location" {...field} className="w-full" />
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
                <FormLabel className="text-base">CV URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your CV URL" {...field} className="w-full" />
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
                <FormLabel className="text-base">Email</FormLabel>
                <FormControl>
                  <Input placeholder="xyz@gmail.com" {...field} className="w-full" />
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
                <FormLabel className="text-base">LinkedIn</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your LinkedIn URL" {...field} className="w-full" />
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
                <FormLabel className="text-base">Github</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Github URL" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tagline"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Tagline</FormLabel>
                <FormControl>
                  <Input placeholder="Full-Stack Developer / UI/UX Designer" {...field} className="w-full" />
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
                <FormLabel className="text-base">Skills</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Skills separated by '-'" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="about_me"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base">About Me</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Type about yourself here." 
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
          className="w-full md:w-auto"
          disabled={isLoading}
        >
          {isLoading ? 'Saving...' : 'Save Profile'}
        </Button>
      </form>
    </Form>
  )
}


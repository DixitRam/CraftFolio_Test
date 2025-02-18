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
  aboutMe: z.string().min(10, {
    message: "About me must be at least 10 characters",
  }).optional(),
  skill: z.string().min(2, {
    message: "Please enter at least one skill",
  })
})

type FormData = z.infer<typeof formSchema>;

export default function ProfileForm() {
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
  })

  function onSubmit(data: FormData) {
    // Format skills into an array
    const formattedData = {
      ...data,
      skill: data.skill.split('-').map(skill => skill.trim())
    };
    
    console.log("Form submitted with data:", formattedData);
    
    
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-4xl mx-auto p-6 space-y-6">
        <div className="flex items-center gap-4 mb-8">  
          <Avatar className="h-24 w-24">
            <AvatarImage src="" />
            <AvatarFallback className="text-3xl">
              <BsPersonBoundingBox />
            </AvatarFallback>
          </Avatar>
          <Button type="button" className="flex items-center gap-2">
            <CiImageOn className="w-5 h-5" />
            Upload Image
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Name</FormLabel>
                <FormControl>
                  <Input placeholder="Profile Name" {...field} className="w-full" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
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
                  <Textarea placeholder="Type your address here" {...field} className="w-full" />
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
                <FormLabel className="text-base">Custom URL</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Your Custom URL" {...field} className="w-full" />
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
            name="linkedin"
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
            name="github"
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
            name="tagLine"
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
                  <Input placeholder="Enter Your Skills separared by '-' over here" {...field} className="w-full" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-6">
          <FormField
            control={form.control}
            name="profile_summary"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base">Profile Summary</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Enter your Profile Summary here" 
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
        </div>

        <Button type="submit" className="w-full md:w-auto">Save Profile</Button>
      </form>
    </Form>
  )
}


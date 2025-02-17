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
  cvURL: z.string().url(),
  email : z.string().email(),
  linkedin : z.string().url(),
  github: z.string().url(),
  profile_summary :z.string().optional(),
  tagLine: z.string().min(2,{
    message: "Tag line must be at list 2 characters",
  }),
  aboutMe: z.string().optional(),
  skill: z.string().optional()
  
})



export default function ProfileForm() {
  

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })
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

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof formSchema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}


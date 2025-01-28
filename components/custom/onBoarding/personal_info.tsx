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



const profile_form_schema = z.object({
  profileName: z.string().min(2, {
    message: "Profile name must be at least 2 characters.",
  }),
  tagLine: z.string().min(2,{
    message: "Tag line must be at list 2 characters",
  }),
  aboutMe: z.string().optional(),
  address: z.string().optional(),
  
})



export default function ProfileForm() {
  

  const profile_form = useForm<z.infer<typeof profile_form_schema>>({
    resolver: zodResolver(profile_form_schema)
  })
  return (
    
    <Form {...profile_form}>
      <form onSubmit={profile_form.handleSubmit(onSubmit)} className="grid p-6 rounded-md grid-flow-col grid-rows-6 gap-2 border-2 border-gray-300 h-auto min-w-72">
      
        <div className="display flex gap-x-7 items-center">  
        <Avatar className="h-16 w-16">
          <AvatarImage/>
          <AvatarFallback><BsPersonBoundingBox />
          </AvatarFallback>
        </Avatar>
        <Button type="submit" className="p-">Upload Image</Button>
        </div>
        <FormField
          control={profile_form.control}
          name="profileName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Profile Name" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.


              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={profile_form.control}
          name="tagLine"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tagline</FormLabel>
              <FormControl>
                <Input placeholder="Full-Stack Developer / UI/UX Designer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={profile_form.control}
          name="aboutMe"
          render={({ field }) => (
            <FormItem>
              <FormLabel>About Me</FormLabel>
              <FormControl>
              <Textarea placeholder="Type about yourself here." {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={profile_form.control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
              <Textarea placeholder="Type your address here" {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Upload Resume</Button>
      </form>
    </Form>
    
  )

}

// 2. Define a submit handler.
function onSubmit(values: z.infer<typeof profile_form_schema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}


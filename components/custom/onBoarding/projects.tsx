"use client"

import { Form } from "@/components/ui/form"
import { Textarea } from "@/components/ui/textarea"
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


const project_form_schema = z.object({
    projectName: z.string(),
    projectDescription: z.string().optional(),
    techlologies: z.object({
        foo: z.string()
            .transform(value => value.split(',').map(Number))
            .pipe(z.string().array()),
    }),
    projectUrl:z.string().url().optional(),
    
})

export default function ProjectForm(){

    const project_form = useForm<z.infer<typeof project_form_schema>>({
        resolver: zodResolver(project_form_schema)
    })

    return(
        
            <Form {...project_form}>
                <form onSubmit={project_form.handleSubmit(onSubmit)} className="grid p-6 rounded-md grid-flow-col grid-rows-6 gap-2 border-2 border-gray-300 h-auto min-w-72">
      
      <FormField
        control={project_form.control}
        name="projectName"
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder="Project Name" {...field} />
            </FormControl>
            <FormMessage/>
          </FormItem>
        )}
      />
      <FormField
        control={project_form.control}
        name="projectDescription"
        render={({ field }) => (
          <FormItem>
            <FormControl>
                <Textarea placeholder="Project Description"{...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={project_form.control}
        name="techlologies"
        render={({ field }) => (
          <FormItem>
            <FormControl>
            <Input placeholder="Technologies (separated by comma)" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={project_form.control}
        name="projectUrl"
        render={({ field }) => (
          <FormItem>
            <FormControl>
            <Input placeholder="Project URL" {...field}/>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      
    </form>
            </Form>    

        
    )
}

function onSubmit(values: z.infer<typeof project_form_schema>) {
  // Do something with the form values.
  // ✅ This will be type-safe and validated.
  console.log(values)
}
"use client"
import { redirect } from 'next/navigation'
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm, useFieldArray } from "react-hook-form"
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
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"
import { toast } from 'sonner'
import { useState } from 'react'

const educationSchema = z.object({
  educations: z.array(z.object({
    institution: z.string().min(2, {
      message: "Institution name must be at least 2 characters.",
    }),
    degree: z.string().min(2, {
      message: "Degree must be at least 2 characters.",
    }),
    description: z.string().optional(),
    date: z.string().min(2, {
      message: "Please enter a valid date range.",
    }),
  }))
})

type FormData = z.infer<typeof educationSchema>;

interface FormProps {
  onComplete(): void;
  }


export default function EducationForm({ onComplete }: FormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      educations: [
        {
          institution: "",
          degree: "",
          description: "",
          date: "",
        }
      ]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educations"
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/education', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ educations: data.educations }),
      });

      if (!response.ok) {
        throw new Error('Failed to save education');
      }

      toast.success('Education details saved successfully!');
      window.location.href="/"
      
    } catch (error) {
      toast.error('Failed to save education details. Please try again.');
      console.error('Error saving education:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Education</h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({
            institution: "",
            degree: "",
            description: "",
            date: "",
          })}
          className="flex items-center gap-2 bg-blue-100 text-custom-primary hover:bg-custom-primary hover:text-white"
        >
          <Plus size={16} /> Add Education
        </Button>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {fields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-6">
              {fields.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  className="absolute right-2 top-2"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-5 w-5 text-red-500" />
                </Button>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name={`educations.${index}.institution`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Institution Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter institution name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name={`educations.${index}.degree`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Degree</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter degree/certification" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`educations.${index}.date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Date Range</FormLabel>
                      <FormControl>
                        <Input placeholder="2020 - 2024" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`educations.${index}.description`}
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel className="text-base">Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your education..." 
                        {...field}
                        className="min-h-[100px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          ))}

          <Button 
            type="submit"
            className="w-full bg-custom-primary text-white hover:bg-custom-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : 'Save All Education'}
          </Button>
        </form>
      </Form>
    </div>
  );
}

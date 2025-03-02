"use client"

import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFieldArray, useForm } from "react-hook-form"
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
import { Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'
import { useState, useEffect } from 'react'

const experienceSchema = z.object({
  experiences: z.array(z.object({
    company: z.string().min(2, {
      message: "Company name must be at least 2 characters.",
    }),
    role: z.string().min(2, {
      message: "Role must be at least 2 characters.",
    }),
    description: z.string().min(10, {
      message: "Description must be at least 10 characters.",
    }),
    date: z.string().min(2, {
      message: "Please enter a valid date range.",
    }),
  }))
});

type FormData = z.infer<typeof experienceSchema>;

export default function EditExperienceForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(experienceSchema),
    defaultValues: {
      experiences: [
        {
          company: "",
          role: "",
          description: "",
          date: "",
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "experiences"
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`/api/experience/${userId}`);
        const data = await response.json();

        if (response.ok && data.success) {
          form.reset({ experiences: data.data });
        }
      } catch (error) {
        console.error('Error fetching experience data:', error);
        toast.error('Failed to load experience data');
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
      
      const response = await fetch(`/api/experience/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to update experience');
      }

      toast.success('Experience updated successfully!');
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to update experience');
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
          <p className="mt-4 text-gray-600">Loading experience data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Edit Experience</h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({
            company: "",
            role: "",
            description: "",
            date: "",
          })}
          className="flex items-center gap-2 bg-blue-100 text-custom-primary hover:bg-custom-primary hover:text-white"
        >
          <Plus size={16} /> Add Experience
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
                  name={`experiences.${index}.company`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Company Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter company name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name={`experiences.${index}.role`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Role</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your role" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`experiences.${index}.date`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Date Range</FormLabel>
                      <FormControl>
                        <Input placeholder="Jan 2022 - Present" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`experiences.${index}.description`}
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel className="text-base">Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your role and responsibilities..." 
                        {...field}
                        className="min-h-[150px]"
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
            {isLoading ? 'Updating...' : 'Update Experience'}
          </Button>
        </form>
      </Form>
    </div>
  );
} 
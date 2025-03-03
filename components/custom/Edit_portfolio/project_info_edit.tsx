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

const projectSchema = z.object({
  projects: z.array(z.object({
    name: z.string().min(2, {
      message: "Project name must be at least 2 characters.",
    }),
    description: z.string().min(10, {
      message: "Project description must be at least 10 characters.",
    }),
    technologies: z.string().min(2, {
      message: "Please enter at least one technology.",
    }),
    project_url: z.string().url({
      message: "Please enter a valid URL.",
    }),
    thumbnail: z.string().url({
      message: "Please enter a valid image URL.",
    }),
  }))
});

type FormData = z.infer<typeof projectSchema>;

export default function EditProjectForm({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);

  const form = useForm<FormData>({
    resolver: zodResolver(projectSchema),
    defaultValues: {
      projects: [
        {
          name: "",
          description: "",
          technologies: "",
          project_url: "",
          thumbnail: "",
        }
      ]
    }
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "projects"
  });

  // Fetch existing data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`/api/projects/${userId}`);
        const data = await response.json();

        if (response.ok && data.success) {
          const formattedProjects = data.data.map((project: any) => ({
            ...project,
            technologies: Array.isArray(project.technologies) 
              ? project.technologies.join(' - ') 
              : project.technologies
          }));
          
          form.reset({ projects: formattedProjects });
        }
      } catch (error) {
        console.error('Error fetching project data:', error);
        toast.error('Failed to load project data');
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
        projects: data.projects.map(project => ({
          ...project,
          technologies: project.technologies.split('-').map(tech => tech.trim())
        }))
      };
      
      const response = await fetch(`/api/projects/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error('Failed to update projects');
      }

      toast.success('Projects updated successfully!');
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to update projects');
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
          <p className="mt-4 text-gray-600">Loading project data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Edit Projects</h2>
        <Button 
          type="button" 
          variant="outline" 
          onClick={() => append({
            name: "",
            description: "",
            technologies: "",
            project_url: "",
            thumbnail: "",
          })}
          className="flex items-center gap-2 bg-blue-100 text-custom-primary hover:bg-custom-primary hover:text-white"
        >
          <Plus size={16} /> Add Project
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
                  name={`projects.${index}.name`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Project Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter project name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name={`projects.${index}.project_url`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Project URL</FormLabel>
                      <FormControl>
                        <Input placeholder="https://..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`projects.${index}.technologies`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Technologies Used</FormLabel>
                      <FormControl>
                        <Input placeholder="React - Next.js - TypeScript" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`projects.${index}.thumbnail`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base">Thumbnail URL</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter image URL" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name={`projects.${index}.description`}
                render={({ field }) => (
                  <FormItem className="mt-6">
                    <FormLabel className="text-base">Project Description</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your project..." 
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
            {isLoading ? 'Updating...' : 'Update Projects'}
          </Button>
        </form>
      </Form>
    </div>
  );
} 
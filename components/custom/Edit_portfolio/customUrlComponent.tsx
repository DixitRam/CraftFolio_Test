"use client"

import { useState, useEffect } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from 'sonner'
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, User, Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"

// Using the same validation as in the original code
const usernameSchema = z.object({
  username: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  })
  .regex(/^[a-zA-Z0-9_-]+$/, "Input cannot contain spaces or special characters (except '-' and '_')"),
});

type UsernameFormData = z.infer<typeof usernameSchema>;

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

export default function ChangeUsernamePage({ userId }: { userId: string }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [profileData, setProfileData] = useState<any>(null);
  const router = useRouter();

  const form = useForm<UsernameFormData>({
    resolver: zodResolver(usernameSchema),
    defaultValues: {
      username: "",
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsFetching(true);
        const response = await fetch(`/api/profile/${userId}`);
        const data = await response.json();

        if (response.ok && data.success) {
          setProfileData(data.data);
          form.reset({ username: data.data.username || "" });
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

  const onSubmit = async (data: UsernameFormData) => {
    try {
      setIsLoading(true);
      
      // Create the data structure exactly as expected by the API
      const formattedData = {
        username: data.username,
        template: profileData.template || "Marc",
        name: profileData.name || "",
        profile_picture: profileData.profile_picture || "",
        location: profileData.location || "",
        cvURL: profileData.cvURL || "",
        contact: {
          email: profileData.contact?.email || "",
          linkedin: profileData.contact?.linkedin || "",
          github: profileData.contact?.github || "",
        },
        tagline: profileData.tagline || "",
        about_me: profileData.about_me || "",
        // This is crucial - the API expects skill as a string to split
        skill: Array.isArray(profileData.skills) 
          ? profileData.skills.join(' - ') 
          : profileData.skill || ""
      };
      
      // Using the same API endpoint and method as in the original code
      const response = await fetch(`/api/profile/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update username');
      }

      toast.success('Username updated successfully!');
      setProfileData({...profileData, username: data.username});
      
    } catch (error: any) {
      toast.error(error.message || 'Failed to update username');
      console.error('Error details:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isFetching) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-custom-primary"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Loading profile data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          className="py-8"
          {...fadeInUp}
        >
          <Button variant="ghost" onClick={() => router.push('/')} className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Profile
          </Button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Form */}
            <motion.div
              className="space-y-6"
              {...fadeInUp}
            >
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Custom URL</h1>
                <p className="text-muted-foreground">
                  Update your username to personalize your Portfolio.
                </p>
              </div>
              
              <Separator />
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base">Username</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                            <Input
                              placeholder="Enter new username"
                              className="pl-10"
                              {...field}
                              disabled={isLoading}
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-custom-primary hover:bg-blue-700"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Updating Username...
                      </>
                    ) : (
                      'Save Changes'
                    )}
                  </Button>
                </form>
              </Form>
            </motion.div>
            
            {/* Right Column - Preview */}
            <motion.div
              className="lg:mt-20 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-200 dark:border-gray-700">
                <h2 className="text-xl font-semibold mb-4">Preview</h2>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Custom URL</p>
                    <p className="text-lg font-medium">
                      {"portique.vercel.app/"+(form.watch("username") || "Your new username")}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
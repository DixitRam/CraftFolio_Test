'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EditProfileForm from "@/components/custom/Edit_portfolio/personal_info_edit"
import EditProjectForm from "@/components/custom/Edit_portfolio/project_info_edit"
import EditEducationForm from "@/components/custom/Edit_portfolio/education_info_edit"
import EditExperienceForm from "@/components/custom/Edit_portfolio/experience_info_edit"
import { useUser } from "@clerk/nextjs";

export default function EditPortfolio() {
  const { user } = useUser();
  const userId = user?.id;

  if (!userId) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Please sign in to edit your portfolio</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Tabs defaultValue="profile" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="profile">Profile</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
        </TabsList>
        
        <TabsContent value="profile" className="mt-6">
          <EditProfileForm userId={userId} />
        </TabsContent>

        <TabsContent value="projects" className="mt-6">
          <EditProjectForm userId={userId} />
        </TabsContent>

        <TabsContent value="education" className="mt-6">
          <EditEducationForm userId={userId} />
        </TabsContent>

        <TabsContent value="experience" className="mt-6">
          <EditExperienceForm userId={userId} />
        </TabsContent>
      </Tabs>
    </div>
  );
} 
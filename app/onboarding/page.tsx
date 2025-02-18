'use client'
import { useState } from 'react'
import ProfileForm from "@/components/custom/onBoarding/personal_info"
import SideBar from "@/components/custom/SideBar"
import EducationForm from "@/components/custom/onBoarding/education_info"
import ProjectForm from "@/components/custom/onBoarding/project_info"
import ExperienceForm from "@/components/custom/onBoarding/experience_info"

export default function onboarding(){
  const [activeItem, setActiveItem] = useState('ProfileForm')
  
  return (
    <div className="flex h-[calc(100vh-4rem)] w-full ">
      <SideBar activeItem={activeItem} setActiveItem={setActiveItem} />
      
      <div className="flex-1 p-4 overflow-y-auto">
        <div className="border-2 border-custom-primary rounded-lg p-6 shadow-sm">
          {activeItem === 'ProfileForm' && <ProfileForm />}
          {activeItem === 'ProjectForm' && <ProjectForm />}
          {activeItem === 'ExperienceForm' && <ExperienceForm />}
          {activeItem === 'EducationForm' && <EducationForm />}
        </div>
      </div>
    </div>
  )
}
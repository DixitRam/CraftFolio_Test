'use client'
import { useState } from 'react'
import ProfileForm from "@/components/custom/onBoarding/personal_info"
import EducationForm from "@/components/custom/onBoarding/education_info"
import ProjectForm from "@/components/custom/onBoarding/project_info"
import ExperienceForm from "@/components/custom/onBoarding/experience_info"
import ProgressBar from "@/components/custom/ProgressBar"

export default function onboarding() {
  const [activeItem, setActiveItem] = useState('ProfileForm')
  const [completedSteps, setCompletedSteps] = useState<string[]>([])

  const handleStepComplete = (stepId: string) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
      
      if (stepId === 'ProfileForm') setActiveItem('ProjectForm')
      else if (stepId === 'ProjectForm') setActiveItem('ExperienceForm')
      else if (stepId === 'ExperienceForm') setActiveItem('EducationForm')
    }
  }

  return (
    <div className="max-w-6xl mx-auto p-4"> 
      <ProgressBar currentStep={activeItem} />
      
      <div className="border-2 border-gray-200 rounded-lg p-8 md:p-12 shadow-md">
        {activeItem === 'ProfileForm' && 
          <ProfileForm onComplete={() => handleStepComplete('ProfileForm')} />}
        {activeItem === 'ProjectForm' && 
          <ProjectForm onComplete={() => handleStepComplete('ProjectForm')} />}
        {activeItem === 'ExperienceForm' && 
          <ExperienceForm onComplete={() => handleStepComplete('ExperienceForm')} />}
        {activeItem === 'EducationForm' && 
          <EducationForm onComplete={() => handleStepComplete('EducationForm')} />}
      </div>
    </div>
  )
}
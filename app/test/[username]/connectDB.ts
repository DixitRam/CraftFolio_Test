"use server"
import connectDB from '@/lib/mongodb';
import { Profile } from '@/lib/models/profile';
import { Project } from '@/lib/models/project';
import { Experience } from '@/lib/models/experience';
import { Education } from '@/lib/models/education';

export async function getUserDetails(username: string) {
  try {
    await connectDB();

    // Get user profile data
    const profileData = await Profile.findOne({ username });
    
    if (!profileData) {
      return null;
    }

    const userId = profileData.userId;

    // Get user's projects, experiences and education
    const projects = await Project.find({ userId });
    const experiences = await Experience.find({ userId });
    const education = await Education.find({ userId });

    // Combine all data
    const userData = JSON.parse(JSON.stringify({
      ...profileData.toObject(),
      projects,
      experience: experiences,
      education
    }));
    return userData;

  } catch (error) {
    console.error("Error fetching user details:", error);
    throw error;
  }
}


"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Profile } from '@/lib/models/profile';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Connect to MongoDB
    await connectDB();
    
    // Parse the request body
    const data = await req.json();
    console.log('Received data:', data); // Debug log

    // Create profile with formatted data
    const profileData = {
      ...data,
      userId,
      skills: data.skill.split('-').map((skill: string) => skill.trim()),
      contact: {
        email: data.contact.email,
        linkedin: data.contact.linkedin,
        github: data.contact.github
      }
    };

    // Remove the skill field as we've converted it to skills array
    delete profileData.skill;
    
    console.log('Formatted data:', profileData); // Debug log

    // Check if profile already exists for this user
    let profile = await Profile.findOne({ userId });
    
    if (profile) {
      // Update existing profile
      profile = await Profile.findOneAndUpdate(
        { userId },
        profileData,
        { new: true }
      );
    } else {
      // Create new profile
      profile = await Profile.create(profileData);
    }
    
    return NextResponse.json({ profile });
  } catch (error: any) {
    console.error('Server error:', error); // Debug log
    return NextResponse.json(
      { 
        error: 'Internal Server Error',
        message: error.message 
      }, 
      { status: 500 }
    );
  }
} 
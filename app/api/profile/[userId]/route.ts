"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Profile } from '@/lib/models/profile';
import { auth } from '@clerk/nextjs/server';

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const profile = await Profile.findOne({ userId });
    
    if (!profile) {
      return NextResponse.json(
        { success: false, error: 'Profile not found' },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error fetching profile' },
      { status: 500 }
    );
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const data = await request.json();
    
    // Format the data to match the schema
    const formattedData = {
      ...data,
      skills: data.skill.split('-').map((skill: string) => skill.trim()),
      contact: {
        email: data.contact.email,
        linkedin: data.contact.linkedin,
        github: data.contact.github
      }
    };

    // Remove the skill field as we've converted it to skills array
    delete formattedData.skill;
    
    const profile = await Profile.findOneAndUpdate(
      { userId },
      formattedData,
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    console.error('Error updating profile:', error);
    return NextResponse.json(
      { success: false, error: 'Error updating profile' },
      { status: 500 }
    );
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { userId: string } }
) {
  const { userId } = params;

  try {
    const { userId: authUserId } = await auth();
    if (!authUserId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { template } = await request.json();
    
    if (!template) {
      return NextResponse.json(
        { success: false, error: 'Template is required' },
        { status: 400 }
      );
    }
    
    const updatedProfile = await Profile.findOneAndUpdate(
      { userId },
      { template },
      { new: true }
    );
    
    if (!updatedProfile) {
      return NextResponse.json(
        { success: false, error: 'Profile not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ 
      success: true, 
      data: updatedProfile,
      message: 'Template updated successfully'
    });
  } catch (error) {
    console.error('Error updating template:', error);
    return NextResponse.json(
      { success: false, error: 'Error updating template' },
      { status: 500 }
    );
  }
}
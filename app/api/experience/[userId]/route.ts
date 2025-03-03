"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Experience } from '@/lib/models/experience';
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
    const experiences = await Experience.find({ userId });
    
    return NextResponse.json({ success: true, data: experiences });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error fetching experiences' },
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
    const { experiences } = await request.json();
    
    // Delete existing experiences
    await Experience.deleteMany({ userId });
    
    // Create new experiences
    const savedExperiences = await Experience.create(
      experiences.map((experience: any) => ({
        ...experience,
        userId
      }))
    );
    
    return NextResponse.json({ success: true, data: savedExperiences });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error updating experiences' },
      { status: 500 }
    );
  }
} 
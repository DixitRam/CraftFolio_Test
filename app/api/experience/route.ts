"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Experience } from '@/lib/models/experience';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { experiences } = await req.json();
    
    const savedExperience = await Experience.create(
      experiences.map((experience: any) => ({
        ...experience,
        userId
      }))
    );
    
    return NextResponse.json({ experience: savedExperience });
  } catch (error) {
    console.error('Error saving experience:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 
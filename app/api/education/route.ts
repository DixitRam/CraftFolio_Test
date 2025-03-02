"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Education } from '@/lib/models/education';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { educations } = await req.json();
    
    const savedEducation = await Education.create(
      educations.map((education: any) => ({
        ...education,
        userId
      }))
    );
    
    return NextResponse.json({ education: savedEducation });
  } catch (error) {
    console.error('Error saving education:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 
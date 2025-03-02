"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Project } from '@/lib/models/project';
import { auth } from '@clerk/nextjs/server';

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    await connectDB();
    const { projects } = await req.json();
    
    const savedProjects = await Project.create(
      projects.map((project: any) => ({
        ...project,
        userId
      }))
    );
    
    return NextResponse.json({ projects: savedProjects });
  } catch (error) {
    console.error('Error saving projects:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
} 
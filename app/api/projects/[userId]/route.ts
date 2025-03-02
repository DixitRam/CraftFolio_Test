"use server"
import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Project } from '@/lib/models/project';
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
    const projects = await Project.find({ userId });
    
    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error fetching projects' },
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
    const { projects } = await request.json();
    
    // Delete existing projects
    await Project.deleteMany({ userId });
    
    // Create new projects
    const savedProjects = await Project.create(
      projects.map((project: any) => ({
        ...project,
        userId
      }))
    );
    
    return NextResponse.json({ success: true, data: savedProjects });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error updating projects' },
      { status: 500 }
    );
  }
} 
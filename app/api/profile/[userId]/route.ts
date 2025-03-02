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
    
    const profile = await Profile.findOneAndUpdate(
      { userId },
      { ...data },
      { new: true, upsert: true }
    );
    
    return NextResponse.json({ success: true, data: profile });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Error updating profile' },
      { status: 500 }
    );
  }
} 
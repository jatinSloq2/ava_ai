import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongoDB';
import Resume from '@/models/Resume';
import fs from 'fs';
import path from 'path';
import { nanoid } from 'nanoid';

export async function POST(req: Request) {
  await connectDB();

  const formData = await req.formData();
  const jobTitle = formData.get('jobTitle') as string;
  const jobDescription = formData.get('jobDescription') as string;
  const file = formData.get('resume') as File;

  if (!jobTitle || !jobDescription || !file) {
    return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const fileName = `${nanoid()}-${file.name}`;
  const filePath = path.join(process.cwd(), 'public', 'uploads', fileName);

  fs.writeFileSync(filePath, buffer);

  // Placeholder for report generation
  const report = `Report for job title: ${jobTitle} - resume analyzed.`; 

  const newResume = await Resume.create({
    jobTitle,
    jobDescription,
    resumeFileName: fileName,
    report
  });

  return NextResponse.json({ success: true, resume: newResume });
}

import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";
import ResumeReview from "@/models/resume";

export async function GET() {
  await connectDB();
  const all = await ResumeReview.find().sort({ createdAt: -1 });
  return NextResponse.json(all);
}
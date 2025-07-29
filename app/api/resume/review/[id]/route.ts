import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoDB";
import ResumeReview from "@/models/resume";

export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  const review = await ResumeReview.findById(params.id);
  return NextResponse.json(review);
}
import { connectDB } from "@/lib/mongoDB";
import ResumeReview from "@/models/resume";
import { reviewResumeFromBuffer } from "@/utils/resumeReview";
import { writeFile } from "fs/promises";
import * as fs from "fs";
import multiparty from "multiparty";
import { NextRequest, NextResponse } from "next/server";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
  const form = new multiparty.Form();

  const data = await new Promise<any>((resolve, reject) => {
    form.parse(req, function (err, fields, files) {
      if (err) reject({ err });
      resolve({ fields, files });
    });
  });

  const file = data.files.file[0];
  const filename = Date.now() + "-" + file.originalFilename;
  const filePath = path.join(process.cwd(), "public/uploads", filename);

  // Read the file buffer
  const fileData = await fs.promises.readFile(file.path);

  // Optional: Save to /public/uploads
  await writeFile(filePath, fileData);

  // Call AI review
  const aiResult = await reviewResumeFromBuffer(fileData);

  // Store in MongoDB
  await connectDB();
  const review = await ResumeReview.create({
    filename,
    filepath: `/uploads/${filename}`,
    ...aiResult,
  });

  return NextResponse.json(review);
}

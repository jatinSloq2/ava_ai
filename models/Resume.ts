import mongoose, { Schema, Document } from 'mongoose';

export interface IResume extends Document {
  jobTitle: string;
  jobDescription: string;
  resumeFileName: string;
  report?: string;
  createdAt: Date;
}

const ResumeSchema = new Schema<IResume>({
  jobTitle: { type: String, required: true },
  jobDescription: { type: String, required: true },
  resumeFileName: { type: String, required: true },
  report: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.models.Resume || mongoose.model<IResume>('Resume', ResumeSchema);

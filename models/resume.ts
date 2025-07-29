import { Schema, model, models } from 'mongoose';

const ResumeReviewSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, // optional
  filename: String,
  originalName: String,
  filepath: String,
  reviewText: String,
  score: Number,
  strengths: [String],
  weaknesses: [String],
  suggestions: [String],
  createdAt: { type: Date, default: Date.now }
});

// Avoid Overwrite Error in Next.js or Hot Reloading
const ResumeReview = models.ResumeReview || model('ResumeReview', ResumeReviewSchema);

export default ResumeReview;
import { connectDB } from '@/lib/mongoDB';
import Resume from '@/models/Resume';
import Link from 'next/link';

export default async function DashboardPage() {
  await connectDB();
  const resumes = await Resume.find().sort({ createdAt: -1 });

  return (
    <div className="max-w-4xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Uploaded Resumes</h1>
      <ul className="space-y-4">
        {resumes.map((resume: any) => (
          <li key={resume._id} className="border p-4 rounded shadow-sm flex justify-between items-center">
            <div>
              <h2 className="font-semibold">{resume.jobTitle}</h2>
              <p className="text-sm text-gray-500">{resume.jobDescription}</p>
            </div>
            <Link href={`/analyzer/${resume._id}`} className="text-blue-500 hover:underline">
              View Report
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

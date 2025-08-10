import { connectDB } from '@/lib/mongoDB';
import Resume from '@/models/Resume';

interface Props {
  params: { id: string };
}

export default async function AnalyzerPage({ params }: Props) {
  await connectDB();
  const resume = await Resume.findById(params.id);

  if (!resume) {
    return <div className="p-8 text-red-500">Resume not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">{resume.jobTitle}</h1>
      <p className="mb-6">{resume.jobDescription}</p>
      <h2 className="font-semibold mb-2">Report:</h2>
      <p className="mb-6">{resume.report}</p>
      <a href={`/uploads/${resume.resumeFileName}`} target="_blank" className="text-blue-500 hover:underline">
        View Resume File
      </a>
    </div>
  );
}

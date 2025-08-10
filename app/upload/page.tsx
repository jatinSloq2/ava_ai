'use client';
import { useState } from 'react';

export default function UploadPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);

    const res = await fetch('/api/upload', {
      method: 'POST',
      body: formData
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert('Resume uploaded successfully!');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="max-w-lg mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="jobTitle" placeholder="Job Title" className="w-full border p-2 rounded" required />
        <textarea name="jobDescription" placeholder="Job Description" className="w-full border p-2 rounded" required />
        <input type="file" name="resume" accept=".pdf,.doc,.docx" className="w-full" required />
        <button type="submit" disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded">
          {loading ? 'Uploading...' : 'Upload'}
        </button>
      </form>
    </div>
  );
}

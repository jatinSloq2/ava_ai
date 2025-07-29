"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [review, setReview] = useState<any>(null);

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("file", file!);

    const res = await fetch("/api/resume/upload", {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    setReview(data);
  };

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Upload Resume</h1>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button onClick={handleUpload} className="mt-4 bg-green-600 text-white px-4 py-2 rounded">Submit</button>

      {review && (
        <div className="mt-6 bg-gray-100 p-4 rounded">
          <h2 className="text-xl font-semibold">AI Review</h2>
          <p><strong>Score:</strong> {review.score}/10</p>
          <p><strong>Review:</strong> {review.review}</p>
          <p><strong>Strengths:</strong> {review.strengths.join(", ")}</p>
          <p><strong>Weaknesses:</strong> {review.weaknesses.join(", ")}</p>
          <p><strong>Suggestions:</strong> {review.suggestions.join(", ")}</p>
        </div>
      )}
    </div>
  );
}

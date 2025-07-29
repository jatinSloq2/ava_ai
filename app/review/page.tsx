import { notFound } from "next/navigation";

async function getReview(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/resume/review/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function ReviewPage({ params }: { params: { id: string } }) {
  const review = await getReview(params.id);
  if (!review) return notFound();

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-2">Review for: {review.filename}</h1>
      <p><strong>Score:</strong> {review.score}/10</p>
      <p><strong>Summary:</strong> {review.review}</p>
      <p><strong>Strengths:</strong> {review.strengths.join(", ")}</p>
      <p><strong>Weaknesses:</strong> {review.weaknesses.join(", ")}</p>
      <p><strong>Suggestions:</strong> {review.suggestions.join(", ")}</p>
    </div>
  );
}
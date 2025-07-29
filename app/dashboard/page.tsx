import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {

  async function getAllReviews() {
    const res = await fetch(`/api/review/all`);
    return res.json();
  }
  const session = await getServerSession(authOptions);
  const reviews = await getAllReviews();

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Your Resume Reviews</h1>
        <ul className="space-y-4">
          {reviews.map((r: any) => (
            <li key={r._id} className="border p-4 rounded shadow">
              <p className="font-semibold">{r.filename}</p>
              <p>Score: {r.score}/10</p>
              <a href={`/review/${r._id}`} className="text-blue-600 underline">View Full Review</a>
            </li>
          ))}
        </ul>
      </div>
      <p className="text-sm text-gray-500 mb-4">{session.user?.email}</p>
      <LogoutButton />
    </div>
  );
}
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { redirect } from "next/navigation";
import LogoutButton from "@/components/LogoutButton";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md text-center">
        <h1 className="text-2xl font-semibold mb-2">
          Welcome to your dashboard, {session.user?.name}
        </h1>
        <p className="text-sm text-gray-500 mb-4">{session.user?.email}</p>
        <LogoutButton />
      </div>
    </div>
  );
}
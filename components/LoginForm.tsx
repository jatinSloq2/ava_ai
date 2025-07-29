"use client";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const handleGoogleLogin = async () => {
    await signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <div className="space-y-4">
      <button
        onClick={handleGoogleLogin}
        className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
      >
        Continue with Google
      </button>
      {/* Add other providers or credentials here later */}
    </div>
  );
}
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/dashboard");
    }
  };

  const handleGoogleLogin = () => {
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <form onSubmit={handleLogin} className="space-y-4">
      {error && <p className="text-red-500 text-sm">{error}</p>}

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
      >
        Login with Email
      </button>

      <div className="text-center text-sm text-gray-500">or</div>

      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
      >
        Continue with Google
      </button>
      <p className="text-sm text-center mt-2">
        Don't have an account? <a href="/signup" className="text-blue-600 hover:underline">Sign up</a>
      </p>
    </form>

  );
}

"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });

    if (!res.ok) {
      const data = await res.json();
      setError(data.error);
      return;
    }

    router.push("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSignup}
        className="bg-white text-black p-6 rounded-xl shadow-md space-y-4 w-full max-w-md"
      >
        <h2 className="text-2xl font-bold">Sign Up</h2>
        {error && <p className="text-red-500">{error}</p>}

        <input
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-3 py-2 border rounded"
          required
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
          Create Account
        </button>
      </form>
      
    </div>
  );
}

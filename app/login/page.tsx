// app/login/page.tsx
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '@/lib/auth-options';
import LoginForm from '@/components/LoginForm';

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/dashboard');

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Login to AVA.ai
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Enter your credentials to access your account
          </p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
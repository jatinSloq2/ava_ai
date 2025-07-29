'use client';

import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { X } from 'lucide-react';

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    setLoading(false);

    if (res?.error) {
      setError(res.error);
    } else {
      router.push('/');
    }
  };

  const handleGoogleLogin = () => {
    signIn('google', { callbackUrl: '/dashboard' });
  };

  return (
    <Card className="shadow-md border dark:border-gray-800">
      <CardContent className="p-6">
        {error && (
          <Alert variant="destructive" className="mb-4">
            <X className="h-4 w-4" />
            <AlertTitle>Login Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Login with Email'}
          </Button>
        </form>

        <div className="text-center text-sm text-muted-foreground my-4">or</div>

        <Button
          type="button"
          variant="outline"
          className="w-full"
          onClick={handleGoogleLogin}
        >
          Continue with Google
        </Button>

        <p className="text-center text-sm text-muted-foreground mt-5">
          Don&apos;t have an account?{' '}
          <a
            href="/signup"
            className="text-primary hover:underline transition"
          >
            Sign up here
          </a>
        </p>
      </CardContent>
    </Card>
  );
}

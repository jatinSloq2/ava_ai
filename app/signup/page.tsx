'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/ui/alert';
import { X } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, 'Name too short'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type FormData = z.infer<typeof formSchema>;

export default function SignupPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setServerError('');

    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const resData = await res.json();
      setServerError(resData.error || 'Signup failed');
      return;
    }

    router.push('/login');
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4 py-12 dark:bg-gray-950">
      <div className="w-full max-w-md">
        <div className="text-center mb-6">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground">
            Create Your Account
          </h1>
          <p className="text-muted-foreground mt-1 text-sm">
            Enter your details to get started
          </p>
        </div>

        {serverError && (
          <Alert variant="destructive" className="mb-4">
            <X className="h-4 w-4" />
            <AlertTitle>Signup Error</AlertTitle>
            <AlertDescription>{serverError}</AlertDescription>
          </Alert>
        )}

        <Card className="shadow-md border dark:border-gray-800">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              {/* Name Field */}
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  {...register('name')}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  {...register('email')}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  {...register('password')}
                />
                {errors.password && (
                  <p className="text-sm text-red-500 mt-1">{errors.password.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>

            <p className="text-center text-sm text-muted-foreground mt-5">
              Already have an account?{' '}
              <a
                href="/login"
                className="text-primary hover:underline transition"
              >
                Login here
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}

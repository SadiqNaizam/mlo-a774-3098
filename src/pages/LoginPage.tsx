import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import HeaderAuth from '@/components/layout/HeaderAuth';
import FooterAuth from '@/components/layout/FooterAuth';
import AuthFormCard from '@/components/AuthFormCard';
import SocialLoginButtonGroup from '@/components/SocialLoginButtonGroup';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
// Assuming toast is available via context or a global setup as per App.tsx (Toaster)
// import { useToast } from "@/components/ui/use-toast"; // If direct toast usage is needed

const loginFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(1, { message: "Password is required." }), // Simplified: in real app, min 8 chars etc.
});

type LoginFormValues = z.infer<typeof loginFormSchema>;

const LoginPage: React.FC = () => {
  console.log('LoginPage loaded');
  // const { toast } = useToast(); // Uncomment if you want to use toast notifications
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  function onSubmit(data: LoginFormValues) {
    console.log('Login form submitted with:', data);
    // Simulate API call
    // toast({ // Uncomment for toast notifications
    //   title: "Login Submitted",
    //   description: `Email: ${data.email}`,
    // });
    alert(`Simulated login for: ${data.email}. Check console for details. In a real app, you'd be redirected to the dashboard.`);
    // On successful login, navigate to dashboard.
    // This navigation is based on App.tsx which has /dashboard
    // navigate('/dashboard'); // Example navigation after successful login
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderAuth />
      <main className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Welcome Back!"
          description="Enter your email and password to access your account."
          footerContent={
            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{' '}
              <Link
                to="/registration" // Path from App.tsx
                className="font-medium text-primary hover:underline"
              >
                Sign Up
              </Link>
            </p>
          }
          className="w-full max-w-md"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                        autoComplete="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center justify-between">
                      <FormLabel>Password</FormLabel>
                      <Link
                        to="/forgot-password" // Path from App.tsx
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="••••••••"
                        {...field}
                        autoComplete="current-password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>
          </Form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-card px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <SocialLoginButtonGroup />
        </AuthFormCard>
      </main>
      <FooterAuth />
    </div>
  );
};

export default LoginPage;
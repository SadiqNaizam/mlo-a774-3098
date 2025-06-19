import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { toast } from 'sonner';

import HeaderAuth from '@/components/layout/HeaderAuth';
import AuthFormCard from '@/components/AuthFormCard';
import FooterAuth from '@/components/layout/FooterAuth';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
// Label is imported from shadcn/ui but FormLabel from form.tsx is typically used with FormField
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const registrationFormSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long." }),
  confirmPassword: z.string().min(8, { message: "Password must be at least 8 characters long." })
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match.",
  path: ["confirmPassword"], // Set error on confirmPassword field
});

type RegistrationFormValues = z.infer<typeof registrationFormSchema>;

const RegistrationPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  console.log('RegistrationPage loaded');

  const form = useForm<RegistrationFormValues>({
    resolver: zodResolver(registrationFormSchema),
    defaultValues: {
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: RegistrationFormValues) => {
    setIsLoading(true);
    console.log('Registration form submitted:', data);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success or error
    const isSuccess = Math.random() > 0.2; // 80% success rate for demo

    if (isSuccess) {
      toast.success("Registration successful! Welcome.");
      // As per App.tsx and user journey, navigate to dashboard
      navigate('/dashboard');
    } else {
      // Example error: email already exists
      form.setError("email", {
        type: "manual",
        message: "This email address is already registered. Try logging in.",
      });
      toast.error("Registration failed. Please check the form for errors.");
    }
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-950">
      <HeaderAuth />
      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <AuthFormCard
          title="Create your Account"
          description="Fill in the details below to join us."
          className="w-full max-w-md"
          footerContent={
            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{' '}
              <Link to="/" className="font-medium text-primary hover:underline dark:text-primary-400">
                Login
              </Link>
            </p>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="you@example.com" {...field} disabled={isLoading} />
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
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormDescription>
                      Must be at least 8 characters long.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} disabled={isLoading} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Creating Account...' : 'Create Account'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <FooterAuth />
    </div>
  );
};

export default RegistrationPage;
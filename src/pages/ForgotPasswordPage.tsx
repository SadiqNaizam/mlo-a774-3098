import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import HeaderAuth from '@/components/layout/HeaderAuth';
import FooterAuth from '@/components/layout/FooterAuth';
import AuthFormCard from '@/components/AuthFormCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Though shadcn/ui FormField uses FormLabel
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
// import { useToast } from "@/components/ui/use-toast"; // Optional: for success/error messages

const forgotPasswordSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

const ForgotPasswordPage: React.FC = () => {
  // const { toast } = useToast(); // Optional
  const navigate = useNavigate();
  console.log('ForgotPasswordPage loaded');

  const form = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: ForgotPasswordFormValues) => {
    console.log('Password reset requested for email:', data.email);
    // Here you would typically call an API to send a password reset link
    // For now, we'll simulate a success and navigate or show a message
    // toast({ // Optional
    //   title: "Password Reset Email Sent",
    //   description: `If an account exists for ${data.email}, a reset link has been sent.`,
    // });
    alert(`If an account exists for ${data.email}, a password reset link has been sent. Check your inbox.`);
    // Optionally, navigate to login page or a confirmation page
    // navigate('/'); 
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <HeaderAuth />
      <main className="flex-grow flex items-center justify-center p-6 sm:p-8">
        <AuthFormCard
          title="Forgot Your Password?"
          description="No worries! Enter your email address below and we'll send you a link to reset your password."
          footerContent={
            <div className="text-center text-sm text-muted-foreground">
              Remember your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Login
              </Link>
            </div>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel htmlFor="email">Email Address</FormLabel>
                    <FormControl>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        {...field}
                        className="text-base"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full text-base py-3" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Sending...' : 'Send Reset Link'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <FooterAuth />
    </div>
  );
};

export default ForgotPasswordPage;
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import HeaderAuth from '@/components/layout/HeaderAuth';
import FooterAuth from '@/components/layout/FooterAuth';
import AuthFormCard from '@/components/AuthFormCard';
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
import { toast } from '@/components/ui/use-toast'; // Or from sonner if preferred
// import { toast as sonnerToast } from "sonner"; // Alternative if sonner is specifically desired

// Define the validation schema for the reset password form
const resetPasswordFormSchema = z.object({
  password: z.string().min(8, { message: "Password must be at least 8 characters." }),
  confirmPassword: z.string().min(8, { message: "Confirm password must be at least 8 characters." }),
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match.",
  path: ["confirmPassword"], // Set the error on the confirmPassword field
});

type ResetPasswordFormValues = z.infer<typeof resetPasswordFormSchema>;

const ResetPasswordPage: React.FC = () => {
  console.log('ResetPasswordPage loaded');
  const navigate = useNavigate();

  // TODO: In a real application, you'd likely get a reset token from the URL query params.
  // const [searchParams] = useSearchParams();
  // const token = searchParams.get('token');
  // useEffect(() => {
  //   if (!token) {
  //     toast({
  //       title: "Invalid Link",
  //       description: "No reset token found. Please request a new password reset link.",
  //       variant: "destructive",
  //     });
  //     navigate('/forgot-password');
  //   }
  // }, [token, navigate]);


  const form = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordFormSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    console.log('Reset password form submitted with:', data);
    // Placeholder for API call to reset password
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Example: if (token) { /* make API call with token and data.password */ }

    toast({
      title: "Password Reset Successful",
      description: "Your password has been updated. You can now log in with your new password.",
    });
    // sonnerToast.success("Password Reset Successful!", { description: "You can now log in with your new password."});
    navigate('/'); // Navigate to LoginPage as per App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-muted/40">
      <HeaderAuth />
      <main className="flex-grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <AuthFormCard
          title="Reset Your Password"
          description="Enter and confirm your new password below."
          footerContent={
            <p className="text-sm text-muted-foreground">
              Remember your password?{' '}
              <Link to="/" className="font-medium text-primary hover:underline">
                Sign In
              </Link>
            </p>
          }
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm New Password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="••••••••" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? 'Resetting...' : 'Set New Password'}
              </Button>
            </form>
          </Form>
        </AuthFormCard>
      </main>
      <FooterAuth />
    </div>
  );
};

export default ResetPasswordPage;
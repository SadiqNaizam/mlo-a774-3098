import React from 'react';
// import { Link } from 'react-router-dom'; // Not strictly needed for this page's content, HeaderApp handles nav
import HeaderApp from '@/components/layout/HeaderApp'; // Custom component
import FooterApp from '@/components/layout/FooterApp'; // Custom component
import { Button } from '@/components/ui/button'; // shadcn/ui
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'; // shadcn/ui

const DashboardPage: React.FC = () => {
  console.log('DashboardPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <HeaderApp />
      <main className="flex-grow flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        <Card className="w-full max-w-lg shadow-xl rounded-xl">
          <CardHeader className="text-center p-6 sm:p-8">
            <CardTitle className="text-3xl sm:text-4xl font-bold tracking-tight">
              Welcome to Your Dashboard!
            </CardTitle>
            <CardDescription className="text-md sm:text-lg text-muted-foreground pt-2">
              You have successfully authenticated.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center p-6 sm:p-8">
            <img 
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZGFzaGJvYXJkJTIwd2VsY29tZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
              alt="Dashboard Welcome Illustration" 
              className="rounded-lg mb-6 sm:mb-8 w-full h-auto max-h-60 object-cover shadow-md" 
            />
            <p className="mb-6 sm:mb-8 text-muted-foreground">
              This is your personalized space. From here, you can manage your account settings, 
              view your activity, and access all the features of our application.
            </p>
            <Button 
              size="lg" 
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={() => console.log('Explore features button clicked. No navigation implemented for this button yet.')}
            >
              Explore Features
            </Button>
            {/* 
            If specific navigation from dashboard is needed:
            Check App.tsx for defined routes. For example, if a '/settings' route exists:
            <Button asChild variant="outline" className="mt-4 w-full sm:w-auto">
              <Link to="/settings">Account Settings</Link>
            </Button> 
            Currently, '/settings' is not in App.tsx, so this is a comment.
            The HeaderApp component already provides links for Logout and placeholder Profile/Settings.
            */}
          </CardContent>
        </Card>
      </main>
      <FooterApp />
    </div>
  );
};

export default DashboardPage;
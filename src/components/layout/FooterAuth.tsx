import React from 'react';
import { Link } from 'react-router-dom';

const FooterAuth: React.FC = () => {
  console.log('FooterAuth loaded');
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-6 px-4 sm:px-6 border-t bg-muted/40">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-2 md:mb-0">&copy; {currentYear} AuthApp. All rights reserved.</p>
        <nav className="flex gap-4">
          {/* These links are placeholders as they are not defined in App.tsx routes */}
          {/* They would typically point to static pages or other parts of the application */}
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
};

export default FooterAuth;
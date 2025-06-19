import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const FooterApp: React.FC = () => {
  console.log('FooterApp loaded');
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto py-8 px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between text-sm">
        <div className="flex items-center gap-2 mb-4 md:mb-0 text-muted-foreground">
          <ShieldCheck className="h-5 w-5 text-primary" />
          <span className="font-semibold">AuthApp</span>
        </div>
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-muted-foreground mb-4 md:mb-0">
          {/* These links are placeholders */}
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          <Link to="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
          <Link to="/sitemap" className="hover:text-primary transition-colors">Sitemap</Link>
        </nav>
        <div className="text-center text-muted-foreground">
          <p>&copy; {currentYear} AuthApp. Secure & Reliable.</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterApp;
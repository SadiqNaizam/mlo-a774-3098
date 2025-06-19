import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';

const HeaderAuth: React.FC = () => {
  console.log('HeaderAuth loaded');
  return (
    <header className="py-4 px-4 sm:px-6 border-b bg-background shadow-sm">
      <div className="container mx-auto flex items-center justify-center md:justify-start">
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold text-foreground hover:text-primary transition-colors">
          <ShieldCheck className="h-7 w-7 text-primary" />
          <span>AuthApp</span>
        </Link>
      </div>
    </header>
  );
};

export default HeaderAuth;
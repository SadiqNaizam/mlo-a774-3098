import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ShieldCheck, LayoutDashboard, UserCircle, LogOut, Settings } from 'lucide-react';

const HeaderApp: React.FC = () => {
  console.log('HeaderApp loaded');

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${
      isActive ? 'text-primary' : 'text-muted-foreground'
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-4">
            <Link to="/dashboard" className="flex items-center gap-2">
            <ShieldCheck className="h-7 w-7 text-primary" />
            <span className="font-semibold text-lg hidden sm:inline-block">AuthApp</span>
            </Link>
            <nav className="flex items-center gap-6">
            <NavLink to="/dashboard" className={navLinkClasses}>
                <LayoutDashboard className="h-5 w-5" />
                <span className="hidden md:inline-block">Dashboard</span>
            </NavLink>
            {/* Additional app navigation links can be added here */}
            </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <UserCircle className="h-6 w-6" />
                <span className="sr-only">Open user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* The /profile route is not in App.tsx, this is a placeholder */}
              <DropdownMenuItem asChild>
                <Link to="/profile" className="w-full">
                  <UserCircle className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              {/* The /settings route is not in App.tsx, this is a placeholder */}
              <DropdownMenuItem asChild>
                <Link to="/settings" className="w-full">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                {/* Logout typically triggers an action; linking to '/' (LoginPage) as a placeholder */}
                <Link to="/" className="w-full">
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default HeaderApp;
import React from 'react';
import { Button } from "@/components/ui/button";
import { Github, Chrome } from 'lucide-react'; // Using Chrome as a placeholder for Google icon

interface SocialLoginButtonProps {
  providerName: string;
  icon: React.ReactNode;
  onClick?: () => void;
}

const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ providerName, icon, onClick }) => {
  return (
    <Button
      variant="outline"
      className="w-full flex items-center justify-center gap-2"
      onClick={onClick}
      aria-label={`Sign in with ${providerName}`}
    >
      {icon}
      Sign in with {providerName}
    </Button>
  );
};

const SocialLoginButtonGroup: React.FC = () => {
  console.log('SocialLoginButtonGroup loaded');

  const handleGoogleLogin = () => {
    console.log('Attempting Google login...');
    // Placeholder for actual Google login logic
  };

  const handleGitHubLogin = () => {
    console.log('Attempting GitHub login...');
    // Placeholder for actual GitHub login logic
  };

  return (
    <div className="space-y-3 w-full">
      <SocialLoginButton
        providerName="Google"
        icon={<Chrome className="h-5 w-5" />}
        onClick={handleGoogleLogin}
      />
      <SocialLoginButton
        providerName="GitHub"
        icon={<Github className="h-5 w-5" />}
        onClick={handleGitHubLogin}
      />
      {/* Add more social login buttons here as needed */}
    </div>
  );
};

export default SocialLoginButtonGroup;
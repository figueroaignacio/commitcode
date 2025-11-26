'use client';

// Hooks
import { useState } from 'react';

// Components
import { GithubIcon, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';

const GITHUB_AUTH_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/github';

export const GitHubSignInButton = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <Button
      onClick={handleClick}
      variant="secondary"
      size="sm"
      className="gap-x-3 w-full"
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          Loading...
        </>
      ) : (
        <>
          <GithubIcon className="size-5" />
          <span>Sign in with GitHub</span>
        </>
      )}
    </Button>
  );
};

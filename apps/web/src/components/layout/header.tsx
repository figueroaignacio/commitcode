'use client';

// Hooks
import { useAuthStore } from '@/store/use-auth-store';

// Components
import Link from 'next/link';
import { GitHubSignInButton } from '../auth/github-sign-in-button';
import { LogoutButton } from '../auth/logout-button';

export function Header() {
  const { isAuthenticated, isLoading } = useAuthStore();

  return (
    <header>
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-sm">
          I7A UI Generator
        </Link>
        <div>
          {isLoading ? (
            <div className="animate-pulse h-10 w-32 rounded-lg"></div>
          ) : isAuthenticated ? (
            <LogoutButton />
          ) : (
            <GitHubSignInButton />
          )}
        </div>
      </nav>
    </header>
  );
}

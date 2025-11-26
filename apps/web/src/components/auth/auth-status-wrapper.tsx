'use client';

import { useAuthStatus } from '@/hooks/use-auth-status';

interface AuthStatusWrapperProps {
  children: React.ReactNode;
}

export const AuthStatusWrapper = ({ children }: AuthStatusWrapperProps) => {
  useAuthStatus();

  return <>{children}</>;
};

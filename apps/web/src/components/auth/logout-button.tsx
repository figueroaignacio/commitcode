'use client';

import { useAuthStore } from '@/store/use-auth-store';
import { Loader2, LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { Button } from '../ui/button';

export const LogoutButton = () => {
  const router = useRouter();
  const { logout } = useAuthStore();
  const [isPending, startTransition] = useTransition();

  const handleLogout = () => {
    startTransition(async () => {
      await logout();
      router.push('/');
    });
  };

  return (
    <Button
      onClick={handleLogout}
      disabled={isPending}
      className="w-full bg-red-600 text-white hover:bg-red-500 disabled:bg-red-400 disabled:cursor-not-allowed gap-x-2"
    >
      {isPending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Cerrando sesión...</span>
        </>
      ) : (
        <>
          <LogOut className="size-4" />
          <span>Cerrar Sesión</span>
        </>
      )}
    </Button>
  );
};

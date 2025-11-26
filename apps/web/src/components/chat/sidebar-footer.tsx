'use client';

// Hooks
import { useAuthStore } from '@/store/use-auth-store';

// Components
import { User } from 'lucide-react';

export const SidebarFooter = () => {
  const { user } = useAuthStore();

  if (!user) return null;

  return (
    <div className="border-t border-border p-4 space-y-3 bg-card/50">
      <div className="flex items-center gap-3">
        {user.avatarUrl ? (
          <img
            src={user.avatarUrl}
            alt={user.username}
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <User className="w-5 h-5 text-primary-foreground" />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground truncate">{user.username}</p>
          <p className="text-xs text-muted-foreground truncate">{user.email || 'Sin email'}</p>
        </div>
      </div>
    </div>
  );
};

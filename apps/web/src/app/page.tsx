'use client';

// Hooks
import { useAuthStore } from '@/store/use-auth-store';
import { useState } from 'react';

// Components
import { AuthModal } from '@/components/auth/auth-modal';
import { ChatArea } from '@/components/chat/chat-area';
import { ChatSidebar } from '@/components/chat/chat-sidebar';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export default function HomePage() {
  const { isAuthenticated, isLoading } = useAuthStore();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const showAuthModal = !isLoading && !isAuthenticated;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-lg text-muted-foreground">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex h-screen bg-background overflow-hidden">
        <ChatSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="flex-1 flex flex-col sm:ml-64">
          <div className="sm:hidden flex items-center justify-between p-4 border-b border-border bg-card">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsSidebarOpen(true)}
              className="text-foreground"
            >
              <Menu className="w-6 h-6" />
            </Button>
            <h1 className="text-lg font-semibold text-foreground">Chat AI</h1>
            <div className="w-10"></div>
          </div>
          <ChatArea />
        </div>
      </div>
      <AuthModal isOpen={showAuthModal} onClose={() => {}} />
    </>
  );
}

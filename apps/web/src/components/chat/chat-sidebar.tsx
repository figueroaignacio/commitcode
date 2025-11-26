'use client';

// Components
import { Plus } from 'lucide-react';
import { Button } from '../ui/button';
import { SidebarFooter } from './sidebar-footer';
import { SimulatedChatList } from './simulated-chat-list';

interface ChatSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({ isOpen, onClose }) => {
  const sidebarContent = (
    <div className="flex flex-col h-full w-full bg-card shadow-xl border-r border-border">
      <div className="p-4 border-b border-border">
        <Button variant="ghost" size="sm" onClick={onClose}>
          <Plus className="w-5 h-5 mr-2" />
          New Chat
        </Button>
      </div>
      <SimulatedChatList />
      <SidebarFooter />
    </div>
  );

  return (
    <>
      <aside className="hidden sm:flex shrink-0 w-64 h-screen fixed top-0 left-0 z-20">
        {sidebarContent}
      </aside>
      <div
        className={`fixed inset-0 bg-foreground/50 z-30 transition-opacity duration-300 sm:hidden 
          ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      ></div>
      <div
        className={`fixed top-0 left-0 w-64 h-screen z-40 transform transition-transform duration-300 sm:hidden 
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {sidebarContent}
      </div>
    </>
  );
};

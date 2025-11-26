import { AuthState, UserProfile } from '@/types/auth';
import { create } from 'zustand';

const LOGOUT_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/logout';

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true,

  setUser: (user: UserProfile | null) => {
    set({
      user,
      isAuthenticated: !!user,
      isLoading: false,
    });
  },
  setIsLoading: (loading: boolean) => set({ isLoading: loading }),

  logout: async () => {
    try {
      set({ isLoading: true });
      const response = await fetch(LOGOUT_URL, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        console.error('Logout failed on server side.');
      }
    } catch (error) {
      console.error('Network or server error during logout:', error);
    } finally {
      get().setUser(null);
      set({ isLoading: false });
    }
  },
}));

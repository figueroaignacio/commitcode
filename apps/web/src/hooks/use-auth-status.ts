// Hooks
import { useAuthStore } from '@/store/use-auth-store';
import { UserProfile } from '@/types/auth';
import { useEffect } from 'react';

const STATUS_URL = process.env.NEXT_PUBLIC_API_BASE_URL + '/auth/status';

export const useAuthStatus = () => {
  const { isLoading, setIsLoading, setUser } = useAuthStore();

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    const checkAuthStatus = async () => {
      try {
        const response = await fetch(STATUS_URL, {
          method: 'GET',
          credentials: 'include',
        });

        if (response.ok) {
          const data = await response.json();
          if (data.authenticated) {
            const user: UserProfile = data.user;
            setUser(user);
          } else {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error checking auth status:', error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export interface UserProfile {
  id: string;
  username: string;
  email: string | null;
  avatarUrl: string | null;
  bio: string | null;
  location: string | null;
  profileUrl: string | null;
}

export interface AuthState {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: UserProfile | null) => void;
  setIsLoading: (loading: boolean) => void;
  logout: () => Promise<void>;
}

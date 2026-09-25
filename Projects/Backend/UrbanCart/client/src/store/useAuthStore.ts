import { create } from 'zustand';
import type { User } from '../types';
import api from '../api/axios';

interface AuthState {
  user: User | null;
  isLoading: Boolean;
  setUser: (user: User) => void;
  clearUser: () => void;
  checkAuth: () => Promise<void>;
  logout: () => Promise<void>;
  isAuthenticated: () => boolean;
  isAdmin: () => boolean;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: true, // true until checkAuth resolves on first load

  setUser: (user: User) => set({ user, isLoading: false }),

  clearUser: () => set({ user: null, isLoading: false }),

  checkAuth: async () => {
    try {
      set({ isLoading: true });
      const response = await api.get("/auth/profile");
      // Backend returns { authorizedUser: ... } or { user: ... }
      const user = await response.data.authorizedUser || response.data?.user;
      set({ user, isLoading: false })
    } catch (error) {
      set({ user: null, isLoading: false })
    }
  },

  // Calls the backend /auth/logout endpoint to clear the cookie
  logout: async () => {
    try {
      await api.post('/auth/signout');
    } catch (err: any) {
      console.error('Logout failed', err);
    } finally {
      set({ user: null, isLoading: false })
    }
  },

  isAuthenticated: () => !!get().user,

  isAdmin: () => !!get().user?.is_admin
}))

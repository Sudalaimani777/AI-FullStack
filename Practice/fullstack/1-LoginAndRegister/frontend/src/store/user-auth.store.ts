import { create } from "zustand";
import type { User, SignInPayload, SignUpPayload } from "../types/auth.type";
import { signInAPI, signUpAPI } from "../api/auth.api";
import axios from "axios";

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null;

    // Actions :-
    register: (payload: SignUpPayload) => Promise<boolean>;
    login: (payload: SignInPayload) => Promise<boolean>;
    logout: () => void;
    clearError: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,
    isLoading: false,
    error: null,

    // Actions :-
    register: async (payload) => {
        set({ isLoading: true, error: null });
        try {
            await signUpAPI(payload);
            set({ isLoading: false });
            return true;
        } catch (err: unknown) {
            let errorMsg = "Registration failed.";
            if (axios.isAxiosError(err) && err.response?.data?.message) {
                errorMsg = err.response.data.message;
            }
            set({
                error: errorMsg,
                isLoading: false
            });
            return false;
        }
    },

    login: async (payload) => {
        set({ isLoading: true, error: null });
        try {
            const response = await signInAPI(payload);
            set({
                user: response?.User_Info,
                isAuthenticated: true,
                isLoading: false
            });
            return true;
        } catch (err: unknown) {
            let errorMsg = "Login failed. Please try again.";
            if (axios.isAxiosError(err) && err.response?.data?.message) {
                errorMsg = err.response.data.message;
            }
            set({
                error: errorMsg,
                isLoading: false,
            });
            return false;
        }
    },
    
    logout: () => set({ user: null, isAuthenticated: false, error: null }),

    clearError: () => set({ error: null })
}));
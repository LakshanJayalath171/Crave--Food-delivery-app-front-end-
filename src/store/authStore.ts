import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";

// Define the user type
interface User {
  _id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: string;
  birth_date: string;
  favorite_dishes: string[];
}

// Auth state interface
interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;

  setUser: (user: User | null) => void;
  setLoading: (isLoading: boolean) => void;
  initializeAuth: () => Promise<void>; // CHANGED: Async function
  logout: () => void;
}

// Create Zustand store
export const useAuthStore = create<AuthState>((set) => ({
  // Initial state
  user: null,
  isAuthenticated: false,
  isLoading: true,


  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setLoading: (isLoading) => set({ isLoading }),

  initializeAuth: async () => {
    const token = localStorage.getItem("token");

    if (!token) {
      delete axiosInstance.defaults.headers.common["Authorization"];
      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });

      return; 
    }

    axiosInstance.defaults.headers.common["Authorization"] =
      `Bearer ${token}`;

    try {
      const response = await axiosInstance.get(
        "/auth/user/profile"
      );
      const userData: User = response.data.data;

      set({
        user: userData,
        isAuthenticated: true,
      });
    } catch (error) {
      
      console.error("Authentication initialization failed:", error);

      localStorage.removeItem("token");

      delete axiosInstance.defaults.headers.common["Authorization"];

      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      
      set({ isLoading: false });
    }
  },

  // Logout
  logout: () => {
    
    localStorage.removeItem("token");
    localStorage.removeItem("crave-cart-storage");
    delete axiosInstance.defaults.headers.common["Authorization"];

    
    set({
      user: null,
      isAuthenticated: false,
      isLoading: false, 
    });
  },
}));
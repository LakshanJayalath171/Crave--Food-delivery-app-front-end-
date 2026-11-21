import { create } from "zustand";
import axiosInstance from "../api/axiosInstance";
import { socket } from "../lib/soket";





type UserRole = "user" | "admin";
// Define the user type
interface User {
  _id: string;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: UserRole;
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

// soket helper function
const ConnectSocket = (token: string) => {
  socket.auth = { token };

  if (!socket.connected) {
    socket.connect();
  }
};

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

      socket.disconnect();

      set({
        user: null,
        isAuthenticated: false,
        isLoading: false,
      });

      return;
    }

    axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    try {
      // Decode JWT payload (without verifying it).
      const payload = JSON.parse(
        atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")),
      );

      const profileEndpoint =
        payload.role === "admin" ? "/auth/admin/profile" : "/auth/user/profile";

      const response = await axiosInstance.get(profileEndpoint);

      const userData: User = response.data.data;

      // checking
      

      console.log("JWT PAYLOAD:", payload);
      console.log("PROFILE RESPONSE:", response.data);
      console.log("USER ROLE:", userData?.role);

      if (userData.role !== "admin" && userData.role !== "user") {
        throw new Error(`Invalid user role: ${userData.role}`);
      }

      set({
        user: userData,
        isAuthenticated: true,
      });

      ConnectSocket(token);
    } catch (error) {
      console.error("Authentication initialization failed:", error);

      localStorage.removeItem("token");

      delete axiosInstance.defaults.headers.common["Authorization"];

      socket.disconnect();

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

    socket.disconnect();
  },
}));

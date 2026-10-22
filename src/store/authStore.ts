import {create} from 'zustand'
import axiosInstance from '../api/axiosInstance';

// define the user type
interface User {
    first_name:string,
    last_name:string,
    phone_number:string,
    email:string,
    role:string,
    birth_date:string,
    favorite_dishes:string[],
}

// auth state interface

interface AuthState {
    user:User | null,
    isAuthenticated:boolean,
    isLoading:boolean,
    setUser :(user:User | null)=>void;
    setLoading :(isLoading:boolean)=>void;
    initializeAuth:()=>void;
    logout:()=>void;
}

// create zustand store

export const useAuthStore = create<AuthState>((set) => ({
    // state
    user: null,
    isAuthenticated: false,
    isLoading: false,

    // actions
    setUser: (user) => set({ user }),
    setLoading: (isLoading) => set({ isLoading }),

    // initialize auth
    initializeAuth: () => {
        const token = localStorage.getItem("token");
        if(!token){
            set({ user: null, isAuthenticated: false ,isLoading: false});
            delete axiosInstance.defaults.headers.common["Authorization"];
        }

        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;

    },

    // logout
    logout: () => {
        localStorage.removeItem("token");
        delete axiosInstance.defaults.headers.common["Authorization"];
        set({ user: null, isAuthenticated: false });
        
    }
}))
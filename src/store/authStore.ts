import {create} from 'zustand'

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
    logout: () => set({ user: null, isAuthenticated: false }),
}))
"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { User, Session } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase";

interface AuthContextType {
    user: User | null;
    session: Session | null;
    loading: boolean;
    signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
    signOut: () => Promise<void>;
    isAdmin: boolean;
    tenantId?: string;
    role?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// List of admin emails - you can also store this in Supabase
const ADMIN_EMAILS = [
    "admin@sanuytin.net",
    "sanuytin.net@gmail.com",
    // Add more admin emails here
];

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Get initial session
        const initAuth = async () => {
            if (process.env.NODE_ENV === 'development') {
                // Mock user for local testing
                setUser({ email: 'admin@sanuytin.net', id: '123' } as any);
                setSession({} as any);
                setLoading(false);
                return;
            }
            const { data: { session } } = await supabase.auth.getSession();
            setSession(session);
            setUser(session?.user ?? null);
            setLoading(false);
        };

        initAuth();

        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
            async (_event, session) => {
                if (process.env.NODE_ENV === 'development') return; // Skip in dev
                setSession(session);
                setUser(session?.user ?? null);
                setLoading(false);
            }
        );

        return () => subscription.unsubscribe();
    }, []);

    const signIn = async (email: string, password: string) => {
        try {
            const { error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                return { error: new Error(error.message) };
            }

            return { error: null };
        } catch (error: any) {
            return { error: new Error(error.message) };
        }
    };

    const signOut = async () => {
        await supabase.auth.signOut();
        setUser(null);
        setSession(null);
    };

    // Check if current user is an admin
    const isAdmin = user ? ADMIN_EMAILS.includes(user.email || "") : false;
    const role = isAdmin ? 'admin' : 'editor';

    return (
        <AuthContext.Provider value={{ user, session, loading, signIn, signOut, isAdmin, role, tenantId: undefined }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

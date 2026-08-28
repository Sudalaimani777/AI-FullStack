"use client";
import { SessionProvider } from "next-auth/react";
import type { ReactNode } from "react";

type AuthProviderProps = {
    children: ReactNode
}


const AuthProvider = ({ children }:AuthProviderProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AuthProvider;
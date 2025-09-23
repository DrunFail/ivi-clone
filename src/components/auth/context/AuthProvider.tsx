"use client";

import { createContext, useState } from "react";
import { AuthContextData, IAuthContext } from "./interfaces";

interface AuthProviderProps {
    children: React.ReactNode
}

export const DEFAULT_AUTH_CONTEXT_VALUE = {
    token: null,
    userEmail: null,
    profile: null,
    userRoles: null
}

const AuthContext = createContext<IAuthContext>({ auth:DEFAULT_AUTH_CONTEXT_VALUE, setAuth: () => null });

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContextData>(DEFAULT_AUTH_CONTEXT_VALUE);

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;

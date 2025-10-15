'use client';

import { createContext, useEffect, useState } from 'react';
import { AuthContextData, IAuthContext } from './interfaces';

interface AuthProviderProps {
    children: React.ReactNode;
    profile: AuthContextData | null;
}

export const DEFAULT_AUTH_CONTEXT_VALUE = {
    token: null,
    userEmail: null,
    profile: null,
    userRoles: null,
};

const AuthContext = createContext<IAuthContext>({ auth: null, setAuth: () => null });

export const AuthProvider = ({ children, profile }: AuthProviderProps) => {
    const [auth, setAuth] = useState<AuthContextData | null>(profile);

    useEffect(() => {
        setAuth(profile);
    }, [profile]);

    return <AuthContext.Provider value={{ auth, setAuth }}>{children}</AuthContext.Provider>;
};

export default AuthContext;

export interface AuthContextData {
    token: string | null,
    userEmail: string | null,
    userRoles: string[] | null,
    profile: any
}
export interface IAuthContext {
     auth: AuthContextData;
     setAuth: (auth: AuthContextData) => void;
}

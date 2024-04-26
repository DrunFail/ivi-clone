"use client"


import { useRouter } from "next/navigation";
import { useEffect } from "react"
import useAuth from "./useAuth";
import { AuthAPI } from "../../api/AuthAPI";
import { authDecodeToken } from "../../utils/authDecodeToken";

export default function useVKAuth() {
    const { query, isReady, push } = useRouter();
    const { setAuth } = useAuth();

    useEffect(() => {
        if (isReady && query.code) {
            const vkAuthCode = query.code as string;

            const loginVk = async (vkCode: string) => {
                try {
                    const response = await AuthAPI.vk(vkCode);
                    const { token, userEmail, userRoles } = authDecodeToken(response.data.token);
                    /* eslint-disable */
                    //@ts-ignore
                    setAuth((prevAuth: AuthContextData) => {
                        return { ...prevAuth, token, userEmail, userRoles }
                    });
                    push('/');
                }
                catch (error) {
                    console.log(error);
                }
            }
            loginVk(vkAuthCode);
        }
    }, [query, isReady])
}
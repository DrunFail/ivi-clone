'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import useAuth from './useAuth';
import { AuthAPI } from '../../api/AuthAPI';
import { authDecodeToken } from '../../utils/authDecodeToken';

export default function useVKAuth() {
    const { push } = useRouter();
    const code = useSearchParams().get('code');
    const { setAuth } = useAuth();

    useEffect(() => {
        if (code) {
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
            loginVk(code);
        }
    }, [code])
}
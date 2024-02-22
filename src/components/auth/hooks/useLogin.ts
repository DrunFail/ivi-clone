import { isAxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { cookieParser } from "../../../utils/cookieParser";
import useAuth from "./useAuth";
import { AuthAPI } from "../../../api/AuthAPI";
import { authDecodeToken } from "../../../utils/authDecodeToken";
import { AuthContextData } from "../context/interfaces";

export default function useLogin() {
    const { setAuth } = useAuth();
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        setError('');
    }, [email, password])

    const setInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const setInputPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }


    const handleSignInCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Не указан логин или пароль')
            return
        }
        try {
            const response = await AuthAPI.login({ email, password })
            const { userEmail, userRoles, token } = authDecodeToken(response.data.token)


            setAuth((prevAuth: AuthContextData) => {
                return { ...prevAuth, token, userEmail, userRoles }
            }
            );
            setEmail("");
            setPassword("");
            const callbackUrl = cookieParser('callbackUrl')?.replace(/%2F/g, "/");
            router.push(callbackUrl ?? '/');
        } catch (error) {
            if (isAxiosError(error)) {
                if (!error?.response) {
                    setError('Нет ответа сервера');
                }
                if (error.response?.status === 400) {
                    setError('Неверный логин или пароль');
                }

                if (error.response?.status === 404) {
                    setError('Пользователь не существует');
                }
            }
            else {
                setError('Ошибка авторизации');
            }
        }

    };

    return {email,password, error, handleSignInCredentials, setInputEmail, setInputPassword}
}
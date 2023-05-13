/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/require-await */
import React, { useEffect, useState } from "react";
import styles from "./LoginForm.module.scss";
import { axiosAuth } from "../../../lib/axios";
import { useRouter } from "next/router";
import AuthService from "../services/auth.service";
import useAuth from "../hooks/useAuth";
import { AxiosResponse } from "axios";
import { AuthContextData } from "../context/interfaces";
import InputField from "../components/InputField/InputField";
import jwtDecode from "jwt-decode";
import FormAuth from "../components/FormAuth/FormAuth";
import { cookieParser } from "../utils/cookieParser";

export default function LoginForm() {
    const setAuth = useAuth()?.setAuth;
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        setError('');
    }, [email, password])

    const handleSignInCredentials = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Не указан логин или пароль')
            return
        }
        try {
            const response: AxiosResponse<AuthContextData> = await AuthService.login(email, password);
              
            const token = response?.data?.token;

            const decode: { email: string, roles: { name: string }[] } = jwtDecode(token)
            const userEmail = decode.email;
            const userRoles = decode.roles.map(elem => elem.name);
            setAuth({ token, userEmail, userRoles });
            setEmail("");
            setPassword("");
            const callbackUrl = cookieParser('callbackUrl')?.replace(/%2F/g, "/");
            router.push(callbackUrl ?? '/');
        } catch (error) {
            if (!error?.response) {
                setError('Нет ответа сервера');
            }
            else if (error.response?.status === 400) {
                setError('Неверный логин или пароль');
            } else {
                setError('Ошибка авторизации');
            }
        }

    };
    return (
        <>
            <FormAuth error={error} handleSubmit={handleSignInCredentials}>

                <InputField
                    placeholder="Введите e-mail"
                    type="email"
                    value={email}
                    id="email"
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    placeholder="Введите пароль"
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                />

            </FormAuth>
        </>
    );
}

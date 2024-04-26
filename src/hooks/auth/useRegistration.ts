"use client";

import { isAxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AuthAPI } from "../../api/AuthAPI";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^[a-zA-Z0-9А-я]{4,16}$/;
export default function useRegistration() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(false);

    const [password, setPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);

    const [confirmPwd, setConfirmPwd] = useState("");
    const [confirmPwdValid, setConfirmPwdValid] = useState(false);

    const [error, setError] = useState("");

    useEffect(() => {
        setError('');
    }, [email, password, confirmPwd])

    useEffect(() => {
        setEmailValid(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setPasswordValid(PWD_REGEX.test(password));
        setConfirmPwdValid(password === confirmPwd);
    }, [password, confirmPwd])


    const setInputEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const setInputPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }
    const setInputConfirmPwd = (e: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPwd(e.target.value)
    }



    const handleSubmitRegistration = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!EMAIL_REGEX.test(email)) {
            setError("Некорректный email")
            return
        } else if (!password) {
            setError("Введите пароль")
            return
        } else if (!confirmPwd) {
            setError("Введите подтверждение пароля")
            return
        } else if (password !== confirmPwd) {
            setError("Введенные пароли не совпадают")
            return
        }
        try {
            const response = await AuthAPI.registration({email,password})
            router.push('/auth/login');
        } catch (error) {
            if (isAxiosError(error)) {
                if (!error?.response) {
                    setError('Нет ответа сервера');
                }
                if (error.response?.status === 400) {
                    setError('Неверный логин или пароль');
                }
                if (error.response?.status === 409) {
                    setError("Пользователь с таким email уже существует");
                    setEmailValid(false);
                }

            }

            else {
                setError('Ошибка авторизации');
            }
        }
    }
    return { email, emailValid, setInputEmail, password, passwordValid, setInputPwd, confirmPwd,  confirmPwdValid, setInputConfirmPwd,  handleSubmitRegistration, error}
}
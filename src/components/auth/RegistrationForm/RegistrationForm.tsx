import styles from "./RegistrationForm.module.scss";
import React, { useEffect, useState } from "react";
import { axiosAuth } from "../../../lib/axios";
import AuthService from "../services/auth.service";
import InputField from "../components/InputField/InputField";
import { useRouter } from "next/router";
import InputErrorBlock from "../components/InputErrorBlock/InputErrorBlock";
import FormAuth from "../components/FormAuth/FormAuth";

const EMAIL_REGEX = /\S+@\S+\.\S+/;
const PWD_REGEX = /^[a-zA-Z0-9А-я]{4,16}$/;

export default function RegistrationForm() {
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
            const response = await AuthService.register(email, password);
            

            router.push('/auth/login');

        } catch (error) {
            if (!error?.response) {
                setError('Нет ответа сервера');
            }
            else if (error.response?.status === 400) {
                setError('Неверный логин или пароль');
            } else if (error.response?.status === 409) {
                setError("Пользователь с таким email уже существует");
                setEmailValid(false);
            } else {
                setError('Ошибка авторизации');
            }
        }
    }

    return (

        <FormAuth error={error} handleSubmit={handleSubmitRegistration}>
            <InputField
                valid={emailValid}
                autoComplete="off"
                placeholder="Введите e-mail"
                type="email"
                value={email}
                id="email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}

            />
            <div>
                <InputField
                    valid={passwordValid}
                    placeholder="Введите пароль"
                    value={password}
                    type="password"
                    id="password"
                    name="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                {!passwordValid && <InputErrorBlock error={"Пароль должен содержать от 4 до 16 символов"} />}
            </div>
            <InputField
                valid={confirmPwdValid}
                placeholder="Подтвердите пароль"
                value={confirmPwd}
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                autoComplete="new-password"
                onChange={(e) => setConfirmPwd(e.target.value)}
            />

        </FormAuth>

    );
}
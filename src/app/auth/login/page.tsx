"use client";


import { ReactElement } from "react";
import PageSection from "../../../components/PageContainers/PageSection/PageSection";
import FormAuthPageHeader from "../../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import FormAuth from "../../../components/auth/components/FormAuth/FormAuth";
import TextFieldWithLabel from "../../../components/UI/TextFieldWithLabel/TextFieldWithLabel";
import useLogin from "../../../hooks/auth/useLogin";

export default function Login() {
    const { email,
        password,
        error,
        handleSignInCredentials,
        setInputEmail,
        setInputPassword } = useLogin();
    return (
        <PageSection>
            <FormAuthPageHeader title={"Войти в личный кабинет"} />

            <FormAuth error={error} handleSubmit={handleSignInCredentials}>

                <TextFieldWithLabel
                    id="email"
                    labelText="Введите e-mail"
                    name="email"
                    type="email"
                    value={email}
                    onChange={setInputEmail}
                />
                <TextFieldWithLabel
                    id="password"
                    labelText="Введите пароль"
                    name="password"
                    type="password"
                    value={password}
                    onChange={setInputPassword}
                />

            </FormAuth>

        </PageSection>
    );
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>{page}</main>
    )
}
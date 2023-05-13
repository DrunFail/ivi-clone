import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import ConfirmConfidential from "../ConfirmConfidential/ConfirmConfidential";
import ErrorBlock from "../ErrorBlock/ErrorBlock";
import InputFieldContainer from "../InputFieldContainer/InputFieldContainer";
import RedirectLink from "../RedirectLink/RedirectLink";
import RedirectLinkContainer from "../RedirectLinkContainer/RedirectLinkContainer";
import styles from "./FormAuth.module.scss";
import React from "react";
import FormContainer from "../FormContainer/FormContainer";
import { useRouter } from "next/router";

interface FormAuthProps {
    error: string,
    children: React.ReactNode,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}


const AUTH = {
    login: "/auth/login",
    register: "/auth/registration"
};


export default function FormAuth({ error, children, handleSubmit }: FormAuthProps) {
    const { asPath } = useRouter();

    return (
        <FormContainer>
            <ErrorBlock error={error} />
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <InputFieldContainer>
                    {children}

                    <ButtonSubmit
                        text={"Продолжить"}
                        type="submit"
                    />
                    <ConfirmConfidential />
                    {asPath === AUTH.login
                        ? <RedirectLinkContainer title={"Нет аккаунта?"}>
                            <RedirectLink
                                href={"/auth/registration"}
                                children={"Зарегистрироваться"}
                            />
                        </RedirectLinkContainer>
                        : <RedirectLinkContainer title={"Есть аккаунт?"}>
                            <RedirectLink
                                href={"/auth/login"}
                                children={"Войти"}
                            />
                        </RedirectLinkContainer>
                    }



                </InputFieldContainer>
            </form>
        </FormContainer>
    );
}



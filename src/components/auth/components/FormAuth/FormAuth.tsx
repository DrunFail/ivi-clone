import ConfirmConfidential from "../ConfirmConfidential/ConfirmConfidential";
import RedirectLink from "../RedirectLink/RedirectLink";
import RedirectLinkContainer from "../RedirectLinkContainer/RedirectLinkContainer";
import styles from "./FormAuth.module.scss";
import FormContainer from "../FormContainer/FormContainer";
import { useRouter } from "next/router";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import ButtonFormAuthSubmit from "../ButtonFormAuthSubmit/ButtonFormAuthSubmit";
import FormContentContainer from "../FormContentContainer/FormContentContainer";
import OAuthButton from "../OAuthButton/OAuthButton";
import useVKAuth from "../../hooks/useVKAuth";


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
    const { asPath, query } = useRouter();


    return (
        <FormContainer>
            <FormErrorMessage error={error} />
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <FormContentContainer>
                    {children}

                    <ButtonFormAuthSubmit
                        text={"Продолжить"}
                        type="submit"
                    />
                    <ConfirmConfidential />
                    {asPath === AUTH.login
                        ? <RedirectLinkContainer title={"Нет аккаунта?"}>
                            <RedirectLink
                                href={"/auth/registration"}>
                                Зарегистрироваться
                            </RedirectLink>
                        </RedirectLinkContainer>
                        : <RedirectLinkContainer title={"Есть аккаунт?"}>
                            <RedirectLink
                                href={"/auth/login"}>
                                Войти
                            </RedirectLink>
                        </RedirectLinkContainer>
                    }
                    <OAuthButton
                        variant="vk"
                        authHandler={useVKAuth} />
                </FormContentContainer>
            </form>
        </FormContainer>
    );
}



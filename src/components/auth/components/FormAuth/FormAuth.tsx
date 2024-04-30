import ConfirmConfidential from "../ConfirmConfidential/ConfirmConfidential";
import RedirectLink from "../RedirectLink/RedirectLink";
import RedirectLinkContainer from "../RedirectLinkContainer/RedirectLinkContainer";
import styles from "./FormAuth.module.scss";
import FormContainer from "../FormContainer/FormContainer";
import { useRouter,usePathname } from "next/navigation";
import FormErrorMessage from "../FormErrorMessage/FormErrorMessage";
import FormContentContainer from "../FormContentContainer/FormContentContainer";
import OAuthButton from "../OAuthButton/OAuthButton";
import useVKAuth from "../../../../hooks/auth/useVKAuth";
import Button from "../../../UI/core/Button/Button";
import { Suspense } from "react";


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
    
    const asPath = usePathname();

    return (
        <FormContainer>
            <FormErrorMessage error={Boolean(error)}>
                {error }
            </FormErrorMessage>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <FormContentContainer>
                    {children}

                    <Button
                        as="button"
                        color="red"
                        type="submit"
                    >
                        Продолжить
                    </Button>

                    <ConfirmConfidential />
                    {asPath === AUTH.login

                        ? <RedirectLinkContainer>
                            <span>Нет аккаунта?</span>
                            <RedirectLink
                                href={"/auth/registration"}>
                                Зарегистрироваться
                            </RedirectLink>
                        </RedirectLinkContainer>

                        : <RedirectLinkContainer>
                            <span>Есть аккаунт?</span>
                            <RedirectLink
                                href={"/auth/login"}>
                                Войти
                            </RedirectLink>
                        </RedirectLinkContainer>
                    }
                    <Suspense>
                    <OAuthButton
                        variant="vk"
                            authHandler={useVKAuth} />
                    </Suspense>
                </FormContentContainer>
            </form>
        </FormContainer>
    );
}



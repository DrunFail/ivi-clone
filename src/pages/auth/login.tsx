import FormAuthPageHeader from "../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import FormAuth from "../../components/auth/components/FormAuth/FormAuth";
import TextFieldWithLabel from "../../components/UI/TextFieldWithLabel/TextFieldWithLabel";
import useLogin from "../../hooks/auth/useLogin";
import { ReactElement } from "react";
import PageWrapperInner from "../../components/PageContainers/PageWrapperInner/PageWrapperInner";

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
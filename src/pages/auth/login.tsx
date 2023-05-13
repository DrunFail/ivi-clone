import React from "react";
import FormAuthPageHeader from "../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import LoginForm from "../../components/auth/LoginForm/LoginForm";
import PageSection from "../../components/PageContainers/PageSection/PageSection";


export default function Login() {
    return (

        <PageSection>
            <FormAuthPageHeader title={"Войти в личный кабинет" } />
            <LoginForm />
        </PageSection>
    );
}

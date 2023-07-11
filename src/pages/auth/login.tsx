import FormAuthPageHeader from "../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import type { ReactElement } from 'react';
import LoginForm from "../../components/auth/LoginForm/LoginForm";

export default function Login() {
    return (
        <PageSection>
            <FormAuthPageHeader title={"Войти в личный кабинет"} />
            <LoginForm />
        </PageSection>
    );
}

Login.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>{page}</main>
    )
}
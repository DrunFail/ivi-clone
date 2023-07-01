import FormAuthPageHeader from "../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import PageSection from "../../components/PageContainers/PageSection/PageSection";
import type { ReactElement } from 'react';
import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";
export default function Registration() {
   
    return (
        <PageSection>
            <FormAuthPageHeader title={"Зарегистрироваться"} />
           <RegistrationForm />
        </PageSection>
    );
}

Registration.getLayout = function getLayout(page: ReactElement) {
    return (
        <main>{page}</main>
    )
}
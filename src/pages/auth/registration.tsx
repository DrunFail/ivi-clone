import React from "react";
import FormAuthPageHeader from "../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import RegistrationForm from "../../components/auth/RegistrationForm/RegistrationForm";
import PageSection from "../../components/PageContainers/PageSection/PageSection";

export default function Registration() {
    return (
        <PageSection>
            <FormAuthPageHeader title={"Зарегистрироваться"} />
            <RegistrationForm />
        </PageSection>
    );
}

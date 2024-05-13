"use client";

import PageSection from "../../../../../components/PageContainers/PageSection/PageSection";
import TextFieldWithLabel from "../../../../../components/UI/TextFieldWithLabel/TextFieldWithLabel";
import FormAuth from "../../../../../components/auth/components/FormAuth/FormAuth";
import FormAuthPageHeader from "../../../../../components/auth/components/FormAuthPageHeader/FormAuthPageHeader";
import FormErrorMessage from "../../../../../components/auth/components/FormErrorMessage/FormErrorMessage";
import useRegistration from "../../../../../hooks/auth/useRegistration";



export default function Registration() {
    const { handleSubmitRegistration,
        password,
        setInputPwd,
        email,
        emailValid,
        setInputEmail,
        passwordValid,
        confirmPwd,
        confirmPwdValid,
        setInputConfirmPwd,
        error } = useRegistration();
    return (
        <PageSection>
            <FormAuthPageHeader title={"Зарегистрироваться"} />

            <FormAuth error={error} handleSubmit={handleSubmitRegistration}>

                <TextFieldWithLabel
                    id="email"
                    name="email"
                    type="email"
                    labelText="Введите e-mail"
                    value={email}
                    onChange={setInputEmail}
                />
                <div>
                    <TextFieldWithLabel
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        onChange={setInputPwd}
                        labelText="Введите пароль"
                    />
                    <FormErrorMessage>
                        Пароль должен содержать от 4 до 16 символов
                    </FormErrorMessage>
                </div>
                <TextFieldWithLabel
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={confirmPwd}
                    onChange={setInputConfirmPwd}
                    labelText="Подтвердите пароль"
                />
            </FormAuth>
        </PageSection>
    );
}
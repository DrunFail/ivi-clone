"use client";

import { useFormState } from "react-dom";
import { useTranslations } from "next-intl";
import TextFieldErrorMessage from "../components/TextFieldErrorMessage/TextFieldErrorMessage";
import { registrationAction } from "../registrationAction";
import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
import SubmitButton from "../components/SubmitButton/SubmitButton";


export default function Registration() {
    const [state, action] = useFormState(registrationAction, undefined);
    const t = useTranslations();

    return (
        <form action={action} noValidate>
            <TextFieldErrorMessage
                isHiddenInput
                error={state?.errors.formError && t(`auth.error.${state.errors.formError}`)}
            >
                <input type="hidden" name="formError" />
            </TextFieldErrorMessage>
            <TextFieldErrorMessage error={state?.errors.email && t(`auth.error.${state.errors.email}`)}>
                <TextFieldWithLabel
                    id="email"
                    name="email"
                    type="email"
                    labelText={t("auth.label.email")}
                />
            </TextFieldErrorMessage>
            <TextFieldErrorMessage error={state?.errors.password && t(`auth.error.${state.errors.password}`)}>
                <TextFieldWithLabel
                    id="password"
                    name="password"
                    type="password"
                    labelText={t("auth.label.pwd")}
                />
            </TextFieldErrorMessage>

            <TextFieldErrorMessage error={state?.errors.confirmPassword && t(`auth.error.${state?.errors.confirmPassword}`)}>
                <TextFieldWithLabel
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    labelText={t("auth.label.confirmPwd")}
                />
            </TextFieldErrorMessage>

            <SubmitButton />
        </form>
    );
}
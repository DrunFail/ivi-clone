'use client';

import { useTranslations } from 'next-intl';
import { useFormState } from 'react-dom';
import TextFieldErrorMessage from '../components/TextFieldErrorMessage/TextFieldErrorMessage';
import { loginAction } from '../loginAction';
import TextFieldWithLabel from '../../UI/TextFieldWithLabel/TextFieldWithLabel';
import SubmitButton from '../components/SubmitButton/SubmitButton';

export default function Login() {
    const [state, action] = useFormState(loginAction, null);
    const t = useTranslations();

    return (
        <form action={action} noValidate>
            <TextFieldErrorMessage
                isHiddenInput
                error={state?.errors?.formError && t(`auth.error.${state?.errors.formError}`)}
            >
                <input type="hidden" name="formError" />
            </TextFieldErrorMessage>
            <TextFieldErrorMessage error={state?.errors?.email && t(`auth.error.${state?.errors.email}`)}>
                <TextFieldWithLabel id="email" labelText={t('auth.label.email')} name="email" type="email" />
            </TextFieldErrorMessage>
            <TextFieldErrorMessage error={state?.errors?.password && t(`auth.error.${state?.errors.password}`)}>
                <TextFieldWithLabel id="password" labelText={t('auth.label.pwd')} name="password" type="password" />
            </TextFieldErrorMessage>
            <SubmitButton />
        </form>
    );
}

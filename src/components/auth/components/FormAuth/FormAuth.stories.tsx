import type { Meta, StoryObj } from '@storybook/react';
import { Title, Canvas } from "@storybook/blocks";

import FormAuth from "./FormAuth";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../../store/store';
import TextFieldWithLabel from '../../../UI/TextFieldWithLabel/TextFieldWithLabel';
import FormErrorMessage from '../FormErrorMessage/FormErrorMessage';




const meta: Meta<typeof FormAuth> = {
    title: 'auth/FormAuth',
    component: FormAuth,
    tags: ["autodocs"],
    decorators: [
        (Story) =>

            <Provider store={store}>
                <WrapperIntl>
                    <PageWrapper>
                        <Story />
                    </PageWrapper>
                </WrapperIntl>
            </Provider>

    ],
    parameters: {
        page: () => (
            <>
                <Title>LoginForm</Title>
                <Canvas of={LoginForm} />

                <Title>RegistrationForm</Title>
                <Canvas of={RegistrationForm} />
            </>
        ),

    },
    args: {
        error: "",
        handleSubmit: () => "submit"
    }

    

};

export default meta;
type Story = StoryObj<typeof FormAuth>;




export const LoginForm: Story = {
    args: {
        children:
            <>
                <TextFieldWithLabel
                    labelText="Введите e-mail"
                    type="email"
                    value={""}
                    id="email"
                    name="email"
                    onChange={() => ""}
                />

                <TextFieldWithLabel
                    labelText="Введите пароль"
                    id="password"
                    value={""}
                    type="password"
                    name="password"
                    onChange={() => ""}
                />
            </>
    }
}



export const RegistrationForm: Story = {

    args: {
        children:
            <>
                <TextFieldWithLabel
                    id="email"
                    name="email"
                    type="email"
                    labelText="Введите e-mail"
                    value={undefined}
                    onChange={undefined}
                />
                <div>
                    <TextFieldWithLabel
                        id="password"
                        name="password"
                        type="password"
                        value={undefined}
                        onChange={undefined}
                        labelText="Введите пароль"
                    />
                    <FormErrorMessage error={undefined}>
                        Пароль должен содержать от 4 до 16 символов
                    </FormErrorMessage>

                </div>
                <TextFieldWithLabel
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    value={undefined}
                    onChange={undefined}
                    labelText="Подтвердите пароль"
                />
            </>
    }
}
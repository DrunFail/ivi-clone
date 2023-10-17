import type { Meta, StoryObj } from '@storybook/react';

import LoginForm from "./LoginForm";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof LoginForm> = {
    title: 'auth/LoginForm',
    component: LoginForm,
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <LoginForm />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
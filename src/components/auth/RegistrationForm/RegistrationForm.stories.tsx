import type { Meta, StoryObj } from '@storybook/react';

import RegistrationForm from "./RegistrationForm";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof RegistrationForm> = {
    title: 'auth/RegistrationForm',
    component: RegistrationForm,
};

export default meta;
type Story = StoryObj<typeof RegistrationForm>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <RegistrationForm />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
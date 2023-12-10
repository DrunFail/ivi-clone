import type { Meta, StoryObj } from '@storybook/react';

import InputField from "./InputField";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';
import store from '../../../../store/createStore';

const meta: Meta<typeof InputField> = {
    title: 'auth/InputField',
    component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <InputField value="input text"/>
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
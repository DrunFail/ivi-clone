import type { Meta, StoryObj } from '@storybook/react';

import FormErrorMessage from "./FormErrorMessage";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import store from '../../../../store/store';

const meta: Meta<typeof FormErrorMessage> = {
    title: 'auth/FormErrorMessage',
    component: FormErrorMessage,
};

export default meta;
type Story = StoryObj<typeof FormErrorMessage>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
               <FormErrorMessage error="error text"/>
            </WrapperIntl>
        </Provider>

    ,
};
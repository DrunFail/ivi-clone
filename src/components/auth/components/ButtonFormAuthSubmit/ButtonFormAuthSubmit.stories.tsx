import type { Meta, StoryObj } from '@storybook/react';

import { Provider } from 'react-redux';
import ButtonFormAuthSubmit from './ButtonFormAuthSubmit';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import  store  from '../../../../store/store';

const meta: Meta<typeof ButtonFormAuthSubmit> = {
    title: 'auth/ButtonFormAuthSubmit',
    component: ButtonFormAuthSubmit,
};

export default meta;
type Story = StoryObj<typeof ButtonFormAuthSubmit>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                    <ButtonFormAuthSubmit text="click"/>
            </WrapperIntl>
        </Provider>

    ,
};
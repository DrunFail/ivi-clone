import type { Meta, StoryObj } from '@storybook/react';

import ButtonActivateCertificate from "./ButtonActivateCertificate";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../store/createStore';

const meta: Meta<typeof ButtonActivateCertificate> = {
    title: 'buttons/ButtonActivateCertificate',
    component: ButtonActivateCertificate,
};

export default meta;
type Story = StoryObj<typeof ButtonActivateCertificate>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonActivateCertificate />
            </WrapperIntl>
        </Provider>
    ,
};
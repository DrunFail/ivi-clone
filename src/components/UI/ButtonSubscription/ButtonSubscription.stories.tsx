import type { Meta, StoryObj } from '@storybook/react';

import ButtonSubscription from "./ButtonSubscriptiion";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const meta: Meta<typeof ButtonSubscription> = {
    title: 'buttons/ButtonSubscription',
    component: ButtonSubscription,
};

export default meta;
type Story = StoryObj<typeof ButtonSubscription>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonSubscription />
            </WrapperIntl>
        </Provider>
    ,
};
import type { Meta, StoryObj } from '@storybook/react';

import ButtonChat from "./ButtonChat";
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/createStore';

const meta: Meta<typeof ButtonChat> = {
    title: 'buttons/ButtonChat',
    component: ButtonChat,
};

export default meta;
type Story = StoryObj<typeof ButtonChat>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonChat />
            </WrapperIntl>
        </Provider>

    ,
};
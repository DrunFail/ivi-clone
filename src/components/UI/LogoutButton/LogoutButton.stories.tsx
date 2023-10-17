import type { Meta, StoryObj } from '@storybook/react';

import LogoutButton from "./LogoutButton";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof LogoutButton> = {
    title: 'buttons/LogoutButton',
    component: LogoutButton,
};

export default meta;
type Story = StoryObj<typeof LogoutButton>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <LogoutButton />
            </WrapperIntl>
        </Provider>

    ,
};
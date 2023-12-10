import type { Meta, StoryObj } from '@storybook/react';

import AdminMainPageMessage from "./AdminMainPageMessage";
import { Provider } from 'react-redux';
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof AdminMainPageMessage> = {
    title: 'admin/AdminMainPageMessage',
    component: AdminMainPageMessage,
};

export default meta;
type Story = StoryObj<typeof AdminMainPageMessage>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <AdminMainPageMessage />
            </WrapperIntl>
        </Provider>

    ,
};
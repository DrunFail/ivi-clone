import type { Meta, StoryObj } from '@storybook/react';

import AdminLayout from "./AdminLayout";
import { Provider } from 'react-redux';
import  store  from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof AdminLayout> = {
    title: 'admin/AdminLayout',
    component: AdminLayout,
};

export default meta;
type Story = StoryObj<typeof AdminLayout>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <AdminLayout>
                        content
                </AdminLayout>
            </WrapperIntl>
        </Provider>

    ,
};
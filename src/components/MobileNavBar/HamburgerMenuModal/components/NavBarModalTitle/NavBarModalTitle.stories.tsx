import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import NavBarModalTitle from "./NavBarModalTitle";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/store';

const meta: Meta<typeof NavBarModalTitle> = {
    title: 'mobileNavBar/NavBarModalTitle',
    component: NavBarModalTitle,
};

export default meta;
type Story = StoryObj<typeof NavBarModalTitle>;

export const Primary: Story = {
    render: () =>

        <Provider store={store}>
            <WrapperIntl>
                <NavBarModalTitle>
                text
                </NavBarModalTitle>
            </WrapperIntl>
        </Provider>

};
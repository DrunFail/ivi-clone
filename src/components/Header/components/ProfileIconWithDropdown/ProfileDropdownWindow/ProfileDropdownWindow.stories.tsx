import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';

import ProfileDropdownWindow from "./ProfileDropdownWindow";
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/store';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof ProfileDropdownWindow> = {
    title: 'header/components/ProfileDropdownWindow',
    component: ProfileDropdownWindow,
    decorators: [
        Story => 
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof ProfileDropdownWindow>;



export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const dropdownCard = canvas.getAllByTestId('profile-dropdown-card')
        const btnLogin = canvas.getByTestId('btn-login')
        await expect(dropdownCard).toHaveLength(8)
        await expect(btnLogin).toBeInTheDocument()
    }

};
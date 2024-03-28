import type { Meta, StoryObj } from '@storybook/react';
import MobileNavBar from "./MobileNavBar";
import { Provider } from 'react-redux';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof MobileNavBar> = {
    title: 'mobileNavBar/MobileNavBar',
    component: MobileNavBar,
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
type Story = StoryObj<typeof MobileNavBar>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const mobileLinks = canvas.getAllByTestId('mobile-nav-link')
        await expect(mobileLinks).toHaveLength(5)
    },
};
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SupportBlockButton from "./SupportBlockButton";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/createStore';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SupportBlockButton> = {
    title: 'footer/components/SupportBlockButton',
    component: SupportBlockButton,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ],
    args: {
        variant: "desktop"
    }
};

export default meta;
type Story = StoryObj<typeof SupportBlockButton>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const btns = canvas.getAllByRole('button')
        await expect(btns).toHaveLength(3)
    }
};
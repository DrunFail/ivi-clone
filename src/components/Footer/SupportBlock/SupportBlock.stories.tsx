import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import SupportBlock from "./SupportBlock";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/createStore';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof SupportBlock> = {
    title: 'footer/components/SupportBlock',
    component: SupportBlock,
    decorators: [
        Story => 
            <Provider store={store}>
                <WrapperIntl>
                    <Story/>
                </WrapperIntl>
            </Provider>
    ],
    args: {
        variant: 'desktop'
    }
};

export default meta;
type Story = StoryObj<typeof SupportBlock>;

export const Primary: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const btnSupp = canvas.getByTestId('btns-support-block')
        const askIvi = canvas.getByTestId('ask-ivi')
        await expect(btnSupp).toBeInTheDocument()
        await expect(askIvi).toBeInTheDocument()

    }
};
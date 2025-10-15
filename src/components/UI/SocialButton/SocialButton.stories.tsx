import type { Meta, StoryObj } from '@storybook/nextjs';
import SocialButton from './SocialButton';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const meta: Meta<typeof SocialButton> = {
    title: 'UI/SocialButton',
    component: SocialButton,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    args: {
        variant: 'vk',
    },
};

export default meta;
type Story = StoryObj<typeof SocialButton>;

export const Primary: Story = {};

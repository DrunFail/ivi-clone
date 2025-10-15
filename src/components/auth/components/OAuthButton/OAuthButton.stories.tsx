import type { Meta, StoryObj } from '@storybook/nextjs';
import OAuthButton from './OAuthButton';

const meta: Meta<typeof OAuthButton> = {
    title: 'auth/OAuthButton',
    component: OAuthButton,
};

export default meta;
type Story = StoryObj<typeof OAuthButton>;

export const Primary: Story = {
    args: {
        variant: 'vk',
    },
};

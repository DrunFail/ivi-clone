import type { Meta, StoryObj } from '@storybook/nextjs';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
    title: 'ui/Avatar',
    component: Avatar,
    args: {
        urlAvatar: './film.jpg',
        variant: 'profile',
    },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Primary: Story = {};

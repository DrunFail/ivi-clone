import type { Meta, StoryObj } from '@storybook/nextjs';

import AdminMainPageMessage from './AdminMainPageMessage';

const meta: Meta<typeof AdminMainPageMessage> = {
    title: 'admin/AdminMainPageMessage',
    component: AdminMainPageMessage,
};

export default meta;
type Story = StoryObj<typeof AdminMainPageMessage>;

export const Primary: Story = {};

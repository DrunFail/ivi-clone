import type { Meta, StoryObj } from '@storybook/nextjs';
import MobileNavBar from './MobileNavBar';

const meta: Meta<typeof MobileNavBar> = {
    title: 'mobileNavBar/MobileNavBar',
    component: MobileNavBar,
};

export default meta;
type Story = StoryObj<typeof MobileNavBar>;

export const Primary: Story = {};

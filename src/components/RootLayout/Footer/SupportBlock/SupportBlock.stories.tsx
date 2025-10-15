import type { Meta, StoryObj } from '@storybook/nextjs';
import SupportBlock from './SupportBlock';

const meta: Meta<typeof SupportBlock> = {
    title: 'footer/components/SupportBlock',
    component: SupportBlock,
};

export default meta;
type Story = StoryObj<typeof SupportBlock>;

export const Primary: Story = {};

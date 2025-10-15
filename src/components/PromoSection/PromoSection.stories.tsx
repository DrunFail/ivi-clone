import type { Meta, StoryObj } from '@storybook/nextjs';
import PromoSection from './PromoSection';

const meta: Meta<typeof PromoSection> = {
    title: 'PromoSection',
    component: PromoSection,
};

export default meta;
type Story = StoryObj<typeof PromoSection>;

export const Primary: Story = {};

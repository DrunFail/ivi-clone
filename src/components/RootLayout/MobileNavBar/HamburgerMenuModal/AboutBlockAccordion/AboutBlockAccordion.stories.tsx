import type { Meta, StoryObj } from '@storybook/nextjs';

import AboutBlockAccordion from './AboutBlockAccordion';

const meta: Meta<typeof AboutBlockAccordion> = {
    title: 'mobileNavBar/AboutBlockAccordion',
    component: AboutBlockAccordion,
};

export default meta;
type Story = StoryObj<typeof AboutBlockAccordion>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import AgeRestriction from "./AgeRestriction";

const meta: Meta<typeof AgeRestriction> = {
    title: 'AgeRestriction',
    component: AgeRestriction,
};

export default meta;
type Story = StoryObj<typeof AgeRestriction>;

export const Primary: Story = {
    render: () => <AgeRestriction /> ,
};


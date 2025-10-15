import type { Meta, StoryObj } from '@storybook/nextjs';

import ResetFilter from './ResetFilter';

const meta: Meta<typeof ResetFilter> = {
    title: 'filters/ResetFilter',
    component: ResetFilter,
};

export default meta;
type Story = StoryObj<typeof ResetFilter>;

export const Primary: Story = {};

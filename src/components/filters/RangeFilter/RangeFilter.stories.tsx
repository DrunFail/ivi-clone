import type { Meta, StoryObj } from '@storybook/nextjs';

import RangeFilter from './RangeFilter';

const meta: Meta<typeof RangeFilter> = {
    title: 'filters/RangeFilter',
    component: RangeFilter,
    args: {
        filterKey: 'DIRECTOR',
        defaultValue: 5,
        min: 0,
        max: 10,
        step: 1,
        filterName: 'FilterName',
    },
    decorators: [
        (Story) => (
            <div style={{ inlineSize: '350px', position: 'relative' }}>
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof RangeFilter>;

export const Primary: Story = {};

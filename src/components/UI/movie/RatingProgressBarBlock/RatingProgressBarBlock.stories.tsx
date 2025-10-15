import type { Meta, StoryObj } from '@storybook/nextjs';

import RatingProgressBarBlock from './RatingProgressBarBlock';

const meta: Meta<typeof RatingProgressBarBlock> = {
    title: 'ui/movie/RatingProgressBarBlock',
    component: RatingProgressBarBlock,
};

export default meta;
type Story = StoryObj<typeof RatingProgressBarBlock>;

export const Primary: Story = {
    render: () => (
        <div style={{ inlineSize: '100px' }}>
            <RatingProgressBarBlock />
        </div>
    ),
};

import type { Meta, StoryObj } from '@storybook/react';

import RatingProgressBarBlock from "./RatingProgressBarBlock";

const meta: Meta<typeof RatingProgressBarBlock> = {
    title: 'RatingProgressBarBlock',
    component: RatingProgressBarBlock,
};

export default meta;
type Story = StoryObj<typeof RatingProgressBarBlock>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <RatingProgressBarBlock />
        </div>,
};

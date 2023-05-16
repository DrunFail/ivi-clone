import type { Meta, StoryObj } from '@storybook/react';

import RatingFromNumbers from "./RatingFromNumbers";

const meta: Meta<typeof RatingFromNumbers> = {
    title: 'RatingFromNumbers',
    component: RatingFromNumbers,
};

export default meta;
type Story = StoryObj<typeof RatingFromNumbers>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <RatingFromNumbers rating={["4", ",6"]} />
        </div>,
};
import type { Meta, StoryObj } from '@storybook/react';

import NumberRatingTop from "./NumberRatingTop";

const meta: Meta<typeof NumberRatingTop> = {
    title: 'NumberRatingTop',
    component: NumberRatingTop,
};

export default meta;
type Story = StoryObj<typeof NumberRatingTop>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <NumberRatingTop rating={5} />
        </div>,
};
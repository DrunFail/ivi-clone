import type { Meta, StoryObj } from '@storybook/react';

import  ProgressBar from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
    title: 'ui/ProgressBar',
    component: ProgressBar,
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <ProgressBar size={2} fillPercentage={50} />
        </div>,
};

export const Secondary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <ProgressBar size={4} fillPercentage={50} />
        </div>,
};
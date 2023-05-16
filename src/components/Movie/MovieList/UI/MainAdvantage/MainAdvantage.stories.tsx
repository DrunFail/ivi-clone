import type { Meta, StoryObj } from '@storybook/react';

import MainAdvantage from "./MainAdvantage";

const meta: Meta<typeof MainAdvantage> = {
    title: 'MainAdvantage',
    component: MainAdvantage,
};

export default meta;
type Story = StoryObj<typeof MainAdvantage>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "100px" }}>
            <MainAdvantage nameAdvantage="характеристика" fillPercentage={50} />
        </div>,
};

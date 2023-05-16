import type { Meta, StoryObj } from '@storybook/react';

import ButtonRateWithHint from "./ButtonRateWithHint";

const meta: Meta<typeof ButtonRateWithHint> = {
    title: 'ButtonRateWithHint',
    component: ButtonRateWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonRateWithHint>;

export const Primary: Story = {
    render: () => <ButtonRateWithHint />,
};

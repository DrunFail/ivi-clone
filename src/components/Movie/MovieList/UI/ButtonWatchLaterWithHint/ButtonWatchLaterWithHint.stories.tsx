import type { Meta, StoryObj } from '@storybook/react';

import ButtonWatchLaterWithHint from "./ButtonWatchLaterWithHint";

const meta: Meta<typeof ButtonWatchLaterWithHint> = {
    title: 'ButtonWatchLaterWithHint',
    component: ButtonWatchLaterWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonWatchLaterWithHint>;

export const Primary: Story = {
    render: () => <ButtonWatchLaterWithHint />,
};
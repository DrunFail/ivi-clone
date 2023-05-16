import type { Meta, StoryObj } from '@storybook/react';

import ButtonSimilarWithHint from "./ButtonSimilarWithHint";

const meta: Meta<typeof ButtonSimilarWithHint> = {
    title: 'ButtonSimilarWithHint',
    component: ButtonSimilarWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonSimilarWithHint>;

export const Primary: Story = {
    render: () => <ButtonSimilarWithHint />,
};
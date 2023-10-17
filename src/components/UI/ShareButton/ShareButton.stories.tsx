import type { Meta, StoryObj } from '@storybook/react';

import ShareButton from "./ShareButton";

const meta: Meta<typeof ShareButton> = {
    title: 'buttons/ShareButton',
    component: ShareButton,
};

export default meta;
type Story = StoryObj<typeof ShareButton>;

export const Primary: Story = {
    render: () =>
        <ShareButton />
    ,
};
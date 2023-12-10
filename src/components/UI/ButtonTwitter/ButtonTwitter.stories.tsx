import type { Meta, StoryObj } from '@storybook/react';

import ButtonTwitter from "./ButtonTwitter";

const meta: Meta<typeof ButtonTwitter> = {
    title: 'buttons/ButtonTwitter',
    component: ButtonTwitter,
};

export default meta;
type Story = StoryObj<typeof ButtonTwitter>;

export const Primary: Story = {
    render: () =>
        <ButtonTwitter />
    ,
};
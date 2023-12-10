import type { Meta, StoryObj } from '@storybook/react';

import ButtonTelegram from "./ButtonTelegram";

const meta: Meta<typeof ButtonTelegram> = {
    title: 'buttons/ButtonTelegram',
    component: ButtonTelegram,
};

export default meta;
type Story = StoryObj<typeof ButtonTelegram>;

export const Primary: Story = {
    render: () =>
        <ButtonTelegram />
    ,
};
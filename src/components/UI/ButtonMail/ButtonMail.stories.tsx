import type { Meta, StoryObj } from '@storybook/react';

import ButtonMail from "./ButtonMail";

const meta: Meta<typeof ButtonMail> = {
    title: 'buttons/ButtonMail',
    component: ButtonMail,
};

export default meta;
type Story = StoryObj<typeof ButtonMail>;

export const Primary: Story = {
    render: () =>
        <ButtonMail />
    ,
};
import type { Meta, StoryObj } from '@storybook/react';

import ButtonVk from "./ButtonVk";

const meta: Meta<typeof ButtonVk> = {
    title: 'buttons/ButtonVk',
    component: ButtonVk,
};

export default meta;
type Story = StoryObj<typeof ButtonVk>;

export const Primary: Story = {
    render: () =>
        <ButtonVk />
    ,
};
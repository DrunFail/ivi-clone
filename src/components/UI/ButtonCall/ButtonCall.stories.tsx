import type { Meta, StoryObj } from '@storybook/react';

import ButtonCall from "./ButtonCall";

const meta: Meta<typeof ButtonCall> = {
    title: 'buttons/ButtonCall',
    component: ButtonCall,
};

export default meta;
type Story = StoryObj<typeof ButtonCall>;

export const Primary: Story = {
    render: () =>
        <ButtonCall />
    ,
};
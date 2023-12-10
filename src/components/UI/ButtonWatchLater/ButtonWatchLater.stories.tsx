import type { Meta, StoryObj } from '@storybook/react';

import ButtonWatchLater from "./ButtonWatchLater";

const meta: Meta<typeof ButtonWatchLater> = {
    title: 'buttons/ButtonWatchLater',
    component: ButtonWatchLater,
};

export default meta;
type Story = StoryObj<typeof ButtonWatchLater>;

export const Primary: Story = {
    render: () =>
        <ButtonWatchLater />
    ,
};
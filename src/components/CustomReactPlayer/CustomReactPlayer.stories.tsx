import type { Meta, StoryObj } from '@storybook/react';

import CustomReactPlayer from './CustomReactPlayer';

const meta: Meta<typeof CustomReactPlayer> = {
    title: 'CustomReactPlayer',
    component: CustomReactPlayer,
};

export default meta;
type Story = StoryObj<typeof CustomReactPlayer>;

export const Primary: Story = {
    render: () =>
        <CustomReactPlayer videoUrl="https://www.youtube.com/watch?v=EFYEni2gsK0" />
    ,
};
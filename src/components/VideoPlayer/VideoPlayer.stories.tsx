import type { Meta, StoryObj } from '@storybook/react';

import VideoPlayer from './VideoPlayer';

const meta: Meta<typeof VideoPlayer> = {
    title: 'VideoPlayer',
    component: VideoPlayer,
};

export default meta;
type Story = StoryObj<typeof VideoPlayer>;

export const Primary: Story = {
    render: () =>
        <VideoPlayer videoSrc="https://www.youtube.com/watch?v=NJyCwdWT80c" />

    ,
};
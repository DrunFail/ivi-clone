import type { Meta, StoryObj } from "@storybook/react";

import WatchAllDeviceTitle from "./WatchAllDeviceTitle";

const meta: Meta<typeof WatchAllDeviceTitle> = {
    title: "movie/WatchAnyDevice/WatchAllDeviceTitle",
    component: WatchAllDeviceTitle,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceTitle>;

export const Primary: Story = {
    args: {
        movieName: "movieName"
    }
};

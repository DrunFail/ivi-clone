import type { Meta, StoryObj } from "@storybook/react";

import WatchAllDeviceImage from "./WatchAllDeviceImage";

const meta: Meta<typeof WatchAllDeviceImage> = {
    title: "movie/WatchAnyDevice/WatchAllDeviceImage",
    component: WatchAllDeviceImage,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceImage>;

export const Primary: Story = {
    args: {
        moviePosterUrl: "./film.jpg"
    }
};

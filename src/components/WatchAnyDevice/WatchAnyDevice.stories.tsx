import type { Meta, StoryObj } from "@storybook/react";

import WatchAnyDevice from "./WatchAnyDevice";

const meta: Meta<typeof WatchAnyDevice> = {
    title: "movie/WatchAnyDevice/WatchAnyDevice",
    component: WatchAnyDevice,
};

export default meta;
type Story = StoryObj<typeof WatchAnyDevice>;

export const Primary: Story = {
    args: {
        movieName: "movieName",
        moviePosterUrl: "./film.jpg"
    }
};

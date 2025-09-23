import type { Meta, StoryObj } from "@storybook/react";

import WatchAllDeviceDescription from "./WatchAllDeviceDescription";

const meta: Meta<typeof WatchAllDeviceDescription> = {
    title: "movie/WatchAnyDevice/WatchAllDeviceDescription",
    component: WatchAllDeviceDescription,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceDescription>;

export const Primary: Story = {};

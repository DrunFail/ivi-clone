import type { Meta, StoryObj } from "@storybook/react";

import LinkConnectDevice from "./LinkConnectDevice";

const meta: Meta<typeof LinkConnectDevice> = {
    title: "movie/WatchAnyDevice/LinkConnectDevice",
    component: LinkConnectDevice,
};

export default meta;
type Story = StoryObj<typeof LinkConnectDevice>;

export const Primary: Story = {};

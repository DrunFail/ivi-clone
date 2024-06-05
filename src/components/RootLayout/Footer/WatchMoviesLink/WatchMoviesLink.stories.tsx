import type { Meta, StoryObj } from "@storybook/react";

import WatchMoviesLink from "./WatchMoviesLink";

const meta: Meta<typeof WatchMoviesLink> = {
    title: "footer/components/WatchMoviesLink",
    component: WatchMoviesLink,
};

export default meta;
type Story = StoryObj<typeof WatchMoviesLink>;

export const Primary: Story = {};

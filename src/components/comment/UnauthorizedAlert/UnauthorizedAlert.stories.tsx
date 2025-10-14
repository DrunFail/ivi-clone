import type { Meta, StoryObj } from "@storybook/nextjs";

import UnauthorizedAlert from "./UnauthorizedAlert";

const meta: Meta<typeof UnauthorizedAlert> = {
    title: "comment/UnauthorizedAlert",
    component: UnauthorizedAlert,
};

export default meta;
type Story = StoryObj<typeof UnauthorizedAlert>;

export const Primary: Story = {};
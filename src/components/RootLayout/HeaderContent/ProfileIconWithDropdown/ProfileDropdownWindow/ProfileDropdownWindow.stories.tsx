import type { Meta, StoryObj } from "@storybook/react";

import ProfileDropdownWindow from "./ProfileDropdownWindow";

const meta: Meta<typeof ProfileDropdownWindow> = {
  title: "header/components/ProfileDropdownWindow",
  component: ProfileDropdownWindow,
};

export default meta;
type Story = StoryObj<typeof ProfileDropdownWindow>;

export const Primary: Story = {};

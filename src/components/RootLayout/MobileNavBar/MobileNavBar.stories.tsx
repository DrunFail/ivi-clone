import type { Meta, StoryObj } from "@storybook/react";
import MobileNavBar from "./MobileNavBar";

const meta: Meta<typeof MobileNavBar> = {
  title: "mobileNavBar/MobileNavBar",
  component: MobileNavBar,
};

export default meta;
type Story = StoryObj<typeof MobileNavBar>;

export const Primary: Story = {};

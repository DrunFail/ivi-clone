import type { Meta, StoryObj } from "@storybook/nextjs";
import FontIcon from "./FontIcon";

const meta: Meta<typeof FontIcon> = {
  title: "ui/FontIcon",
  component: FontIcon,
  args: {
    variant: "arrow",
    size: 12,
  },
};

export default meta;
type Story = StoryObj<typeof FontIcon>;

export const Primary: Story = {};

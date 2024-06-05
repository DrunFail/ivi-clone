import type { Meta, StoryObj } from "@storybook/react";
import SupportBlockButton from "./SupportBlockButton";

const meta: Meta<typeof SupportBlockButton> = {
  title: "footer/components/SupportBlockButton",
  component: SupportBlockButton,
  args: {
    variant: "desktop",
  },
};

export default meta;
type Story = StoryObj<typeof SupportBlockButton>;

export const Primary: Story = {};

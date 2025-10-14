import type { Meta, StoryObj } from "@storybook/nextjs";
import ButtonSubscription from "./ButtonSubscription";

const meta: Meta<typeof ButtonSubscription> = {
  title: "header/components/ButtonSubscription",
  component: ButtonSubscription,
};

export default meta;
type Story = StoryObj<typeof ButtonSubscription>;

export const Primary: Story = {};

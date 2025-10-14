import type { Meta, StoryObj } from "@storybook/nextjs";
import AskIvi from "./AskIvi";

const meta: Meta<typeof AskIvi> = {
  title: "footer/components/AskIvi",
  component: AskIvi,
};

export default meta;
type Story = StoryObj<typeof AskIvi>;

export const Primary: Story = {};

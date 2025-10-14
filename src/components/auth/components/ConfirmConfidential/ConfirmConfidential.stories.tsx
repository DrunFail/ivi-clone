import type { Meta, StoryObj } from "@storybook/nextjs";

import ConfirmConfidential from "./ConfirmConfidential";

const meta: Meta<typeof ConfirmConfidential> = {
  title: "auth/ConfirmConfidential",
  component: ConfirmConfidential,
};

export default meta;
type Story = StoryObj<typeof ConfirmConfidential>;

export const Primary: Story = {};

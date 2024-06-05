import type { Meta, StoryObj } from "@storybook/react";
import SearchModal from "./SearchModal";

const meta: Meta<typeof SearchModal> = {
  title: "search/SearchModal",
  component: SearchModal,
};

export default meta;
type Story = StoryObj<typeof SearchModal>;

export const Primary: Story = {};

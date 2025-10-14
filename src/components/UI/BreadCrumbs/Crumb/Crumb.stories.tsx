import type { Meta, StoryObj } from "@storybook/nextjs";
import Crumb from "./Crumb";

const meta: Meta<typeof Crumb> = {
  title: "ui/BreadCrumbs/Crumb",
  component: Crumb,
  args: {
    children: "title",
  },
};

export default meta;
type Story = StoryObj<typeof Crumb>;

export const Primary: Story = {};

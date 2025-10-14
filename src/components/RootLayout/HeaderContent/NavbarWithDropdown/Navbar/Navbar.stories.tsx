import type { Meta, StoryObj } from "@storybook/nextjs";

import Navbar from "./Navbar";
import { NAV_MENU } from "../../../../../constants/headerConstants";

const meta: Meta<typeof Navbar> = {
  title: "header/components/Navbar",
  component: Navbar,
  args: {
    navLinkData: NAV_MENU,
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};

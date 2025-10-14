import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderNavbarDropdownContent from "./HeaderNavbarDropdownContent";
import { NAV_MENU } from "../../../../../constants/headerConstants";

const currentLink = NAV_MENU[3];

const meta: Meta<typeof HeaderNavbarDropdownContent> = {
  title: "header/components/HeaderNavbarDropdownContent",
  component: HeaderNavbarDropdownContent,
  args: {
    currentLink: currentLink,
  },
};

export default meta;
type Story = StoryObj<typeof HeaderNavbarDropdownContent>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";

import HamburgerMenuModal from "./HamburgerMenuModal";
import { NAV_MENU } from "../../../../constants/headerConstants";

const meta: Meta<typeof HamburgerMenuModal> = {
  title: "mobileNavBar/HamburgerMenuModal",
  component: HamburgerMenuModal,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuModal>;

export const Primary: Story = {
    args: {
        navMenu: NAV_MENU
    }
}
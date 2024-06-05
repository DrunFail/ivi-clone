import type { Meta, StoryObj } from "@storybook/react";

import HamburgerMenuButtonWithModal from "./HamburgerMenuButtonWithModal";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";
import { NAV_MENU } from "../../../../constants/headerConstants";

const meta: Meta<typeof HamburgerMenuButtonWithModal> = {
    title: "mobileNavBar/HamburgerMenuButtonWithModal",
    component: HamburgerMenuButtonWithModal,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuButtonWithModal>;

export const Primary: Story = {
    args: {
        openBtn: "openBtn",
        closeBtn: "closeBtn",
        modal: <HamburgerMenuModal navMenu={NAV_MENU} />
    }
};

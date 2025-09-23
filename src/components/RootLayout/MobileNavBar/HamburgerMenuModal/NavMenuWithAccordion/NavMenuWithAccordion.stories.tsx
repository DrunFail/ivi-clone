import type { Meta, StoryObj } from "@storybook/react";

import NavMenuWithAccordion from "./NavMenuWithAccordion";
import { NAV_MENU } from "../../../../../constants/headerConstants";

const meta: Meta<typeof NavMenuWithAccordion> = {
  title: "mobileNavBar/NavMenuWithAccordion",
  component: NavMenuWithAccordion,
};

export default meta;
type Story = StoryObj<typeof NavMenuWithAccordion>;

export const Primary: Story = {
    args: {
        navMenu: NAV_MENU
    }
}

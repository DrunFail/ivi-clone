import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderContent from "./HeaderContent";
import { NAV_MENU } from "../../../constants/headerConstants";

const meta: Meta<typeof HeaderContent> = {
  title: "Header/HeaderContent",
    component: HeaderContent,
    args: {
        navList: NAV_MENU,
    }
};

export default meta;
type Story = StoryObj<typeof HeaderContent>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import HeaderLogo from "./HeaderLogo";

const meta: Meta<typeof HeaderLogo> = {
    title: "header/components/HeaderLogo",
    component: HeaderLogo,
};

export default meta;
type Story = StoryObj<typeof HeaderLogo>;

export const Primary: Story = {};

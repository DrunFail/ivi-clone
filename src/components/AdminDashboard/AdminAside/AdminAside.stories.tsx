import type { Meta, StoryObj } from "@storybook/nextjs";

import AdminAside from "./AdminAside";

const MENU = [
    { id: 1, name: "option1", link: "" },
    { id: 2, name: "option2", link: "" },
];

const meta: Meta<typeof AdminAside> = {
  title: "admin/AdminAside",
    component: AdminAside,
};

export default meta;
type Story = StoryObj<typeof AdminAside>;



export const Primary: Story = {
    args: {
        menu: MENU
    }
};

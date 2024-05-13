import type { Meta, StoryObj } from "@storybook/react";

import AdminAside from "./AdminAside";
import { Provider } from "react-redux";
import store from "../../../store/store";

const meta: Meta<typeof AdminAside> = {
  title: "admin/AdminAside",
  component: AdminAside,
};

export default meta;
type Story = StoryObj<typeof AdminAside>;

const menu = [
  { id: 1, name: "option1", link: "" },
  { id: 2, name: "option2", link: "" },
];

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <AdminAside menu={menu} />
    </Provider>
  ),
};

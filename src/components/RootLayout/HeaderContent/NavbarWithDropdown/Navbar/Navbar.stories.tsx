import type { Meta, StoryObj } from "@storybook/react";

import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "../../../../../store/store";
import { NAV_MENU } from "../../../../../constants/headerConstants";

const meta: Meta<typeof Navbar> = {
  title: "header/components/Navbar",
  component: Navbar,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
  args: {
    navLinkData: NAV_MENU,
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

export const Primary: Story = {};

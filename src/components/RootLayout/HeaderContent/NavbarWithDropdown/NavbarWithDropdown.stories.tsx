import type { Meta, StoryObj } from "@storybook/react";

import NavbarWithDropdown from "./NavbarWithDropdown";
import { Provider } from "react-redux";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../../store/store";
import HeaderPortalContainer from "../portal/HeaderPortalContainer";
import { NAV_MENU } from "../../../../constants/headerConstants";

const meta: Meta<typeof NavbarWithDropdown> = {
  title: "header/components/NavbarWithDropdown",
  component: NavbarWithDropdown,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
          <HeaderPortalContainer />
      </Provider>
    ),
  ],
  args: {
    navLinkData: NAV_MENU,
  },
};

export default meta;
type Story = StoryObj<typeof NavbarWithDropdown>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navbar = canvas.getByTestId("header-navbar");
    await expect(navbar).toBeInTheDocument();
  },
};

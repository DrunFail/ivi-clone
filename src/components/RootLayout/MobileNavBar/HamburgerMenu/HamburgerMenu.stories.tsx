import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import HamburgerMenu from "./HamburgerMenu";
import store from "../../../../store/store";
import WrapperIntl from "../../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof HamburgerMenu> = {
  title: "mobileNavBar/HamburgerMenu",
  component: HamburgerMenu,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenu>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
        <HamburgerMenu />
      </WrapperIntl>
    </Provider>
  ),
};

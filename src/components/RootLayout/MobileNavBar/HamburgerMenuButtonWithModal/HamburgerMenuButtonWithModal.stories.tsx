import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import store from "../../../../store/store";
import WrapperIntl from "../../../WrapperIntl/WrapperIntl";
import HamburgerMenuButtonWithModal from "./HamburgerMenuButtonWithModal";
import HamburgerMenuModal from "../HamburgerMenuModal/HamburgerMenuModal";

const meta: Meta<typeof HamburgerMenuButtonWithModal> = {
    title: "mobileNavBar/HamburgerMenuButtonWithModal",
    component: HamburgerMenuButtonWithModal,
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuButtonWithModal>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
      <WrapperIntl>
                <HamburgerMenuButtonWithModal openBtn={"openBtn"} closeBtn={"closeBtn"} modal={<HamburgerMenuModal /> } />
      </WrapperIntl>
    </Provider>
  ),
};

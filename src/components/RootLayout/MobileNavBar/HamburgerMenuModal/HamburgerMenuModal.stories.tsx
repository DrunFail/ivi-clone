import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import HamburgerMenuModal from "./HamburgerMenuModal";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../../store/store";

const meta: Meta<typeof HamburgerMenuModal> = {
  title: "mobileNavBar/HamburgerMenuModal",
  component: HamburgerMenuModal,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HamburgerMenuModal>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const socialBtnBlock = canvas.getByTestId("btn-social-block");
    const dwnlAppLinks = canvas.getByTestId("dwnld-app-links");
    const btnSub = canvas.getByTestId("btn-sub-humb");
    const serviceBlock = canvas.getByTestId("service-block-hamb");
    const aboutBlock = canvas.getByTestId("about-block-hamb");
    const navAccordionBlock = canvas.getByTestId("nav-acc-hamb");
    await expect(socialBtnBlock).toBeInTheDocument();
    await expect(dwnlAppLinks).toBeInTheDocument();
    await expect(btnSub).toBeInTheDocument();
    await expect(serviceBlock).toBeInTheDocument();
    await expect(aboutBlock).toBeInTheDocument();
    await expect(navAccordionBlock).toBeInTheDocument();
  },
};

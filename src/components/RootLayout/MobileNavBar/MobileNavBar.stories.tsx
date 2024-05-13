import type { Meta, StoryObj } from "@storybook/react";
import MobileNavBar from "./MobileNavBar";
import { Provider } from "react-redux";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../store/store";

const meta: Meta<typeof MobileNavBar> = {
  title: "mobileNavBar/MobileNavBar",
  component: MobileNavBar,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof MobileNavBar>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const mobileLinks = canvas.getAllByTestId("mobile-nav-link");
    await expect(mobileLinks).toHaveLength(5);
  },
};

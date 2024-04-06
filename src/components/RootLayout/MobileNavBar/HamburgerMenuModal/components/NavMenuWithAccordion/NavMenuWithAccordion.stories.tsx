import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import NavMenuWithAccordion from "./NavMenuWithAccordion";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../../../../store/store";
import WrapperIntl from "../../../../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof NavMenuWithAccordion> = {
  title: "mobileNavBar/NavMenuWithAccordion",
  component: NavMenuWithAccordion,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <WrapperIntl>
          <Story />
        </WrapperIntl>
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavMenuWithAccordion>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navTitle = canvas.getAllByTestId("nav-title-hamb");
    const navMenuAccordion = canvas.getAllByTestId("nav-menu-acc");
    await expect(navTitle).toHaveLength(5);
    await expect(navMenuAccordion).toHaveLength(3);
  },
};

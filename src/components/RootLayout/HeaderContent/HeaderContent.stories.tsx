import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import HeaderContent from "./HeaderContent";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../store/store";

const meta: Meta<typeof HeaderContent> = {
  title: "Header/HeaderContent",
  component: HeaderContent,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof HeaderContent>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const link = canvas.getByTestId("header-home-link");
    const navbarDropdown = canvas.getByTestId("navbar-dropdown");
    const btnSub = canvas.getByTestId("btn-sub");
    const btnSearch = canvas.getByTestId("btn-search");
    const profileDropdown = canvas.getByTestId("profile-dropdown");
    const lngSwitcher = canvas.getByTestId("lng-switcher");
    await expect(link).toBeInTheDocument();
    await expect(navbarDropdown).toBeInTheDocument();
    await expect(btnSub).toBeInTheDocument();
    await expect(btnSearch).toBeInTheDocument();
    await expect(profileDropdown).toBeInTheDocument();
    await expect(lngSwitcher).toBeInTheDocument();
  },
};

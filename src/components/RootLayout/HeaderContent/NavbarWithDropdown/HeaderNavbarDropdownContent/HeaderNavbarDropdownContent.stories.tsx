import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";

import HeaderNavbarDropdownContent from "./HeaderNavbarDropdownContent";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import { NAV_MENU } from "../../../../../constants/headerConstants";
import store from "../../../../../store/store";
import WrapperIntl from "../../../../WrapperIntl/WrapperIntl";

const currentLink = NAV_MENU[3];

const meta: Meta<typeof HeaderNavbarDropdownContent> = {
  title: "header/components/HeaderNavbarDropdownContent",
  component: HeaderNavbarDropdownContent,
  decorators: [
    (Story) => (
      <Provider store={store}>
        <WrapperIntl>
          <Story />
        </WrapperIntl>
      </Provider>
    ),
  ],
  args: {
    currentLink: currentLink.data!,
  },
};

export default meta;
type Story = StoryObj<typeof HeaderNavbarDropdownContent>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const navDropdown = canvas.getByTestId("nav-dropdown");
    const genres = canvas.getByTestId("genres");
    const countries = canvas.getByTestId("countries");
    const year = canvas.getByTestId("year");
    const aside = canvas.getByTestId("aside");
    const line = canvas.getByTestId("dropdown-line");
    await expect(navDropdown).toBeInTheDocument();
    await expect(genres).toBeInTheDocument();
    await expect(countries).toBeInTheDocument();
    await expect(year).toBeInTheDocument();
    await expect(aside).toBeInTheDocument();
    await expect(line).toBeInTheDocument();
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import Footer from "./Footer";
import { within } from "@storybook/test";
import { expect } from "@storybook/test";
import store from "../../../store/store";
import WrapperIntl from "../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof Footer> = {
  title: "footer/Footer",
  component: Footer,
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
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const aboutNav = canvas.getByTestId("about");
    const partsNav = canvas.getByTestId("parts");
    const supportBlock = canvas.getByTestId("support-block");
    const watchLink = canvas.getByTestId("watch-movies-link");
    const dwnldLinks = canvas.getByTestId("dwnld-app-links");
    const btnSocialBlock = canvas.getByTestId("btn-social-block");
    await expect(aboutNav).toBeInTheDocument();
    await expect(partsNav).toBeInTheDocument();
    await expect(supportBlock).toBeInTheDocument();
    await expect(watchLink).toBeInTheDocument();
    await expect(dwnldLinks).toBeInTheDocument();
    await expect(btnSocialBlock).toBeInTheDocument();
  },
};

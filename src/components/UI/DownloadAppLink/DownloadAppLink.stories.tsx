import type { Meta, StoryObj } from "@storybook/react";
import DownloadAppLink from "./DownloadAppLink";
import { Provider } from "react-redux";
import store from "../../../store/store";
import WrapperIntl from "../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof DownloadAppLink> = {
  title: "UI/DownloadAppLink",
  component: DownloadAppLink,
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
    variant: "apple",
  },
};

export default meta;
type Story = StoryObj<typeof DownloadAppLink>;

export const Primary: Story = {};

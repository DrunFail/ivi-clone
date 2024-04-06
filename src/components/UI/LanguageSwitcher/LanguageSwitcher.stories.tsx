import type { Meta, StoryObj } from "@storybook/react";
import LanguageSwitcher from "./LanguageSwitcher";
import store from "../../../store/store";
import { Provider } from "react-redux";
import WrapperIntl from "../../WrapperIntl/WrapperIntl";

const meta: Meta<typeof LanguageSwitcher> = {
  title: "ui/LanguageSwitcher",
  component: LanguageSwitcher,
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
type Story = StoryObj<typeof LanguageSwitcher>;

export const Primary: Story = {};

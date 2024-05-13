import type { Meta, StoryObj } from "@storybook/react";
import { Provider } from "react-redux";
import AskIvi from "./AskIvi";
import store from "../../../../store/store";

const meta: Meta<typeof AskIvi> = {
  title: "footer/components/AskIvi",
  component: AskIvi,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof AskIvi>;

export const Primary: Story = {};

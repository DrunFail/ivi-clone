import type { Meta, StoryObj } from "@storybook/react";
import ButtonSubscription from "./ButtonSubscription";
import { Provider } from "react-redux";
import store from "../../../../store/store";

const meta: Meta<typeof ButtonSubscription> = {
  title: "header/components/ButtonSubscription",
  component: ButtonSubscription,
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonSubscription>;

export const Primary: Story = {};

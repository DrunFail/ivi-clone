import type { Meta, StoryObj } from "@storybook/react";

import FormErrorMessage from "./FormErrorMessage";
import { Provider } from "react-redux";
import store from "../../../../store/store";

const meta: Meta<typeof FormErrorMessage> = {
  title: "auth/FormErrorMessage",
  component: FormErrorMessage,
};

export default meta;
type Story = StoryObj<typeof FormErrorMessage>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <FormErrorMessage error>error text</FormErrorMessage>
    </Provider>
  ),
};

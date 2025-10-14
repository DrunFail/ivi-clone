import type { Meta, StoryObj } from "@storybook/nextjs";
import ButtonWithHint from "./ButtonWithHint";
import store from "../../../store/store";
import { Provider } from "react-redux";

const meta: Meta<typeof ButtonWithHint> = {
  title: "ui/ButtonWithHint",
  component: ButtonWithHint,
  args: {
    children: "button",
    description: "button",
  },
  decorators: [
    (Story) => (
      <Provider store={store}>
          <Story />
      </Provider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ButtonWithHint>;

export const Primary: Story = {};

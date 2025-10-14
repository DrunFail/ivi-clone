import type { Meta, StoryObj } from "@storybook/nextjs";
import { Provider } from "react-redux";
import ButtonSocialBlock from "./ButtonSocialBlock";
import store from "../../../store/store";

const meta: Meta<typeof ButtonSocialBlock> = {
  title: "ButtonSocialBlock",
  component: ButtonSocialBlock,
};

export default meta;
type Story = StoryObj<typeof ButtonSocialBlock>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
                <ButtonSocialBlock />
    </Provider>
  ),
};

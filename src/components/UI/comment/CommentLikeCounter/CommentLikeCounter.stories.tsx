import type { Meta, StoryObj } from "@storybook/react";

import CommentLikeCounter from "./CommentLikeCounter";
import { Provider } from "react-redux";
import store from "../../../../store/store";

const meta: Meta<typeof CommentLikeCounter> = {
  title: "comment/ui/CommentLikeCounter",
  component: CommentLikeCounter,
};

export default meta;
type Story = StoryObj<typeof CommentLikeCounter>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <CommentLikeCounter />
    </Provider>
  ),
};

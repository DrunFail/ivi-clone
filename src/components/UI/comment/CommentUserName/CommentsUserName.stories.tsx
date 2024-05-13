import type { Meta, StoryObj } from "@storybook/react";

import CommentsUserName from "./CommentUserName";
import { Provider } from "react-redux";
import store from "../../../../store/store";

const meta: Meta<typeof CommentsUserName> = {
  title: "comment/ui/CommentsUserName",
  component: CommentsUserName,
};

export default meta;
type Story = StoryObj<typeof CommentsUserName>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <CommentsUserName userName={"userName"} />
    </Provider>
  ),
};

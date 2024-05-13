import type { Meta, StoryObj } from "@storybook/react";

import CommentDateCreated from "./CommentDateCreated";
import { Provider } from "react-redux";
import store from "../../../../store/store";

const meta: Meta<typeof CommentDateCreated> = {
  title: "comment/ui/CommentDateCreated",
  component: CommentDateCreated,
};

export default meta;
type Story = StoryObj<typeof CommentDateCreated>;

export const Primary: Story = {
  render: () => (
    <Provider store={store}>
        <CommentDateCreated commentDate={"comment date"} />
    </Provider>
  ),
};

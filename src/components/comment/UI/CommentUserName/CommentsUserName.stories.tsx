import type { Meta, StoryObj } from "@storybook/react";

import CommentsUserName from "./CommentUserName";

const meta: Meta<typeof CommentsUserName> = {
  title: "comment/ui/CommentsUserName",
  component: CommentsUserName,
};

export default meta;
type Story = StoryObj<typeof CommentsUserName>;

export const Primary: Story = {
    args: {
        userName: "userName"
    }
};

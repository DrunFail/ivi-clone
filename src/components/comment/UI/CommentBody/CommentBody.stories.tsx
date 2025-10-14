import type { Meta, StoryObj } from "@storybook/nextjs";

import CommentBody from "./CommentBody";

const meta: Meta<typeof CommentBody> = {
  title: "comment/ui/CommentBody",
  component: CommentBody,
};

export default meta;
type Story = StoryObj<typeof CommentBody>;

export const Primary: Story = {
    args: {
        commentBody: "comment text"
    }
};

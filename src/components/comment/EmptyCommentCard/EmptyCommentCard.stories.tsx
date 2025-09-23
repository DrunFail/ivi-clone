import type { Meta, StoryObj } from "@storybook/react";

import EmptyCommentCard from "./EmptyCommentCard";

const meta: Meta<typeof EmptyCommentCard> = {
  title: "comment/EmptyCommentCard",
  component: EmptyCommentCard,
};

export default meta;
type Story = StoryObj<typeof EmptyCommentCard>;

export const Primary: Story = {
    args: {
        variant: "list"
    }
};

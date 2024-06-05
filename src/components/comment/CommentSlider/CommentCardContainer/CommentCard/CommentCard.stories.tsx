import type { Meta, StoryObj } from "@storybook/react";

import CommentCard from "./CommentCard";

const meta: Meta<typeof CommentCard> = {
  title: "comment/CommentCard",
    component: CommentCard,
    decorators: [
        (Story) => 
            <div style={{ inlineSize: "350px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const comment = {
  commentCreatedDate: "14 апреля 2022",
  commentAuthor: "author",
  commentBody: "body",
  commentChildList: [],
  movieKinopoiskId: 1111,
  commentId: 4,
};

export const Primary: Story = {
    args: {
        modifiedCommentData: comment,
    }
};

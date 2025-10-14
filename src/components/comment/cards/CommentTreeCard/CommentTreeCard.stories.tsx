import type { Meta, StoryObj } from "@storybook/nextjs";

import CommentTreeCard from "./CommentTreeCard";

const meta: Meta<typeof CommentTreeCard> = {
    title: "comment/cards/CommentTreeCard",
    component: CommentTreeCard,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "600px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof CommentTreeCard>;

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
        authorName: comment.commentAuthor,
        dateCreated: comment.commentCreatedDate,
        commentBody: comment.commentBody,
        isAuthUser: true
    }
};
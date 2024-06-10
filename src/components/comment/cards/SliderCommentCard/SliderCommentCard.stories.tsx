import type { Meta, StoryObj } from "@storybook/react";

import SliderCommentCard from "./SliderCommentCard";

const meta: Meta<typeof SliderCommentCard> = {
    title: "comment/cards/SliderCommentCard",
    component: SliderCommentCard,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "350px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof SliderCommentCard>;

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
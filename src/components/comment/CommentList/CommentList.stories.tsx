import type { Meta, StoryObj } from "@storybook/react";

import CommentList from "./CommentList";

const meta: Meta<typeof CommentList> = {
    title: "comment/CommentList",
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;


const commentItem = <div style={{ blockSize: "100px", backgroundColor: "blue" }} />

export const Primary: Story = {
    args: {
        children:
            <>
                {commentItem}
                {commentItem}
            </>,
        variant: "parent"
    }
};

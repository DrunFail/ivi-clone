import type { Meta, StoryObj } from "@storybook/nextjs";

import CommentSlider from "./CommentSlider";
const meta: Meta<typeof CommentSlider> = {
    title: "comment/CommentSlider",
    component: CommentSlider,
};

export default meta;
type Story = StoryObj<typeof CommentSlider>;

export const Primary: Story = {
    args: {
        commentData: {
            count: 0,
            rows: [],
        },
        movieName: "",
        movieId: 0
    }
};

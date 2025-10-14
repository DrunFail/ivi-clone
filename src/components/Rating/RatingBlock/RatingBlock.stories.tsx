import type { Meta, StoryObj } from "@storybook/nextjs";
import RatingBlock from "./RatingBlock";

const meta: Meta<typeof RatingBlock> = {
  title: "ui/rating/RatingBlock",
  component: RatingBlock,
};

export default meta;
type Story = StoryObj<typeof RatingBlock>;

export const Large: Story = {
    args: {
        ratingValue: 8
    }
};

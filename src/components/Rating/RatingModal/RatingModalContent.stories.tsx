import type { Meta, StoryObj } from "@storybook/react";
import RatingModalContent from "./RatingModalContent";

const meta: Meta<typeof RatingModalContent> = {
    title: "ui/rating/RatingModalContent",
    component: RatingModalContent,
};

export default meta;
type Story = StoryObj<typeof RatingModalContent>;

export const Large: Story = {};

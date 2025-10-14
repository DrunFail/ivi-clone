import type { Meta, StoryObj } from "@storybook/nextjs";
import RatingModalContent from "./RatingModalContent";

const meta: Meta<typeof RatingModalContent> = {
    title: "ui/rating/RatingModalContent",
    component: RatingModalContent,
};

export default meta;
type Story = StoryObj<typeof RatingModalContent>;

export const Large: Story = {};

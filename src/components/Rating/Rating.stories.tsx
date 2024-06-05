import type { Meta, StoryObj } from "@storybook/react";
import Rating from "./Rating";
import RatingModalContent from "./RatingModal/RatingModalContent";
import RatingLarge from "./RatingLarge/RatingLarge";
import RatingBlock from "./RatingBlock/RatingBlock";

const meta: Meta<typeof Rating> = {
    title: "ui/rating/Rating",
    component: Rating,
};

export default meta;
type Story = StoryObj<typeof Rating>;


export const Default: Story = {
    args: {
        ratingButton:
            <RatingLarge>
                <RatingBlock ratingValue={5} />

            </RatingLarge>,
        ratingModalContent: <RatingModalContent />
    }
};

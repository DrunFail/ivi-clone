import type { Meta, StoryObj } from "@storybook/react";

import NumberRatingTop from "./NumberRatingTop";
import { Story } from "@storybook/blocks";

const meta: Meta<typeof NumberRatingTop> = {
  title: "movie/TopTenSlider/NumberRatingTop",
    component: NumberRatingTop,
    decorators: [
        (Story) => 
            <div style={{ inlineSize: "100px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof NumberRatingTop>;

export const Primary: Story = {
    args: {
        rating: 5
    }
};

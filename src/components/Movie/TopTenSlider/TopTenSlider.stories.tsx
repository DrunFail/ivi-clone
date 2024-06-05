import type { Meta, StoryObj } from "@storybook/react";
import { TOP_10_DATA } from "./data";

import TopTenSlider from "./TopTenSlider";

const meta: Meta<typeof TopTenSlider> = {
    title: "movie/TopTenSlider/TopTenSlider",
    component: TopTenSlider,
    args: {
        count: 10,
        data: TOP_10_DATA
    }
};

export default meta;
type Story = StoryObj<typeof TopTenSlider>;

export const Primary: Story = {};

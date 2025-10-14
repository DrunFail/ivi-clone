import type { Meta, StoryObj } from "@storybook/nextjs";

import FadeBottomTop from "./FadeBottomTop";

const meta: Meta<typeof FadeBottomTop> = {
  title: "movie/TopTenSlider/FadeBottomTop",
  component: FadeBottomTop,
};

export default meta;
type Story = StoryObj<typeof FadeBottomTop>;

export const Primary: Story = {
    args: {
        children: 
            <div style={{ blockSize: "100px" }}>
                component
            </div>,
    }
};

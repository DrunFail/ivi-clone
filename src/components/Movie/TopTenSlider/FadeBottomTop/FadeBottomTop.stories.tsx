import type { Meta, StoryObj } from "@storybook/react";

import FadeBottomTop from "./FadeBottomTop";

const meta: Meta<typeof FadeBottomTop> = {
  title: "movie/TopTenSlider/FadeBottomTop",
  component: FadeBottomTop,
};

export default meta;
type Story = StoryObj<typeof FadeBottomTop>;

export const Primary: Story = {
  render: () => (
    <FadeBottomTop>
      <div style={{ blockSize: "100px" }}>component</div>
    </FadeBottomTop>
  ),
};

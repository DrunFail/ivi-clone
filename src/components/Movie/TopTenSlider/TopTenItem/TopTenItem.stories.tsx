import type { Meta, StoryObj } from "@storybook/react";

import TopTenItem from "./TopTenItem";

const meta: Meta<typeof TopTenItem> = {
  title: "movie/TopTenSlider/TopTenItem",
    component: TopTenItem,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "300px", position: "relative" }}>
                <Story />
            </div>
  ]
};

export default meta;
type Story = StoryObj<typeof TopTenItem>;

export const Primary: Story = {
    args: {
        elem: {id: 3, href: "", name: ""}
    }
};

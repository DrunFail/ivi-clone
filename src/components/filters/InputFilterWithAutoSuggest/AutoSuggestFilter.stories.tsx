import type { Meta, StoryObj } from "@storybook/nextjs";

import AutoSuggestFilter from "./AutoSuggestFilter";

const meta: Meta<typeof AutoSuggestFilter> = {
    title: "filters/AutoSuggestFilter",
    component: AutoSuggestFilter,
    args: {
        filterKey: "FilterName",
        filterName: "FilterName"
    }
};

export default meta;
type Story = StoryObj<typeof AutoSuggestFilter>;

export const Primary: Story = {};
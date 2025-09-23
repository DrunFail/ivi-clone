import type { Meta, StoryObj } from "@storybook/react";

import SearchResultCard from "./SearchResultCard";

const meta: Meta<typeof SearchResultCard> = {
    title: "search/SearchResultCard",
    component: SearchResultCard,
};

export default meta;
type Story = StoryObj<typeof SearchResultCard>;

export const Primary: Story = {
    args: {
        name: "name",
        year: 2022
    }
};

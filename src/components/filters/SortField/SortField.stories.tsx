import type { Meta, StoryObj } from "@storybook/react";

import SortField from "./SortField";

const meta: Meta<typeof SortField> = {
    title: "filters/SortField",
    component: SortField,
    args: {
        filterKey: "FilterName",
        variants: ["nameRu", "year", "ratingKinopoiskVoteCount", "ratingKinopoisk"],
        defaultSortValue: "year"
    },
    decorators: [
        (Story) => (
            <div style={{ inlineSize: "350px", position: "relative" }}>
                <Story />
            </div>
        ),
    ]
};

export default meta;
type Story = StoryObj<typeof SortField>;

export const Primary: Story = {};
import type { Meta, StoryObj } from "@storybook/react";

import SearchResult from "./SearchResult";

const meta: Meta<typeof SearchResult> = {
    title: "search/SearchResult",
    component: SearchResult,
    decorators: [
        (Story) =>
            <div style={{ inlineSize: "400px" }}>
                <Story />
            </div>
    ]
};

export default meta;
type Story = StoryObj<typeof SearchResult>;

export const Primary: Story = {};

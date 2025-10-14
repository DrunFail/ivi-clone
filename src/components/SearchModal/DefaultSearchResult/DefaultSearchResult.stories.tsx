import type { Meta, StoryObj } from "@storybook/nextjs";

import DefaultSearchResult from "./DefaultSearchResult";

const meta: Meta<typeof DefaultSearchResult> = {
  title: "search/DefaultSearchResult",
  component: DefaultSearchResult,
};

export default meta;
type Story = StoryObj<typeof DefaultSearchResult>;

export const Primary: Story = {};

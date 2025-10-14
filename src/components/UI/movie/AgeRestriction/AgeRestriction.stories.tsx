import type { Meta, StoryObj } from "@storybook/nextjs";

import AgeRestriction from "./AgeRestriction";

const meta: Meta<typeof AgeRestriction> = {
  title: "ui/movie/AgeRestriction",
  component: AgeRestriction,
};

export default meta;
type Story = StoryObj<typeof AgeRestriction>;

export const Primary: Story = {
  render: () => <AgeRestriction />,
};

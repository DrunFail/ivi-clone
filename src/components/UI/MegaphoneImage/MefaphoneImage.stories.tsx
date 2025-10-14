import type { Meta, StoryObj } from "@storybook/nextjs";

import MegaphoneImage from "./MegaphoneImage";

const meta: Meta<typeof MegaphoneImage> = {
  title: "MegaphoneImage",
  component: MegaphoneImage,
};

export default meta;
type Story = StoryObj<typeof MegaphoneImage>;

export const Primary: Story = {
  render: () => <MegaphoneImage />,
};

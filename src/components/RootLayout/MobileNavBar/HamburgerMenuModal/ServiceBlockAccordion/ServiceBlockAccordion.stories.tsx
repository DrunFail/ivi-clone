import type { Meta, StoryObj } from "@storybook/nextjs";

import ServiceBlockAccordion from "./ServiceBlockAccordion";

const meta: Meta<typeof ServiceBlockAccordion> = {
  title: "mobileNavBar/ServiceBlockAccordion",
  component: ServiceBlockAccordion,
};

export default meta;
type Story = StoryObj<typeof ServiceBlockAccordion>;

export const Primary: Story = {};

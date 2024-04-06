import type { Meta, StoryObj } from "@storybook/react";
import AccordionHeading from "./AccordionHeading";

const meta: Meta<typeof AccordionHeading> = {
  title: "ui/AccordionItem/AccordionHeading",
  component: AccordionHeading,
  args: {
    children: "accordionHeading",
    isOpen: false,
  },
};

export default meta;
type Story = StoryObj<typeof AccordionHeading>;

export const Primary: Story = {};

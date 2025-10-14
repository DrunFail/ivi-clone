import type { Meta, StoryObj } from "@storybook/nextjs";
import BreadCrumbs from "./BreadCrumbs";

const meta: Meta<typeof BreadCrumbs> = {
  title: "ui/BreadCrumbs/BreadCrumbs",
  component: BreadCrumbs,
  args: {
    breadcrumbs: [
      {
        children: "title1",
        href: "",
      },
      {
        children: "title2",
        href: "",
      },
      {
        children: "title3",
        href: "",
      },
    ],
    isLastCrumbActive: false,
  },
};

export default meta;
type Story = StoryObj<typeof BreadCrumbs>;

export const Primary: Story = {};

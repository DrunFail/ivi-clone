import type { Meta, StoryObj } from "@storybook/nextjs";

import FormAuthPageHeader from "./FormAuthPageHeader";

const meta: Meta<typeof FormAuthPageHeader> = {
  title: "auth/FormAuthPageHeader",
  component: FormAuthPageHeader,
};

export default meta;
type Story = StoryObj<typeof FormAuthPageHeader>;

export const Primary: Story = {
    args: {
        children: "children content"
    }
};

import type { Meta, StoryObj } from "@storybook/react";

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

import type { Meta, StoryObj } from "@storybook/react";

import RootLayout from "./RootLayout";

const meta: Meta<typeof RootLayout> = {
  title: "layouts/RootLayout",
  component: RootLayout,
};

export default meta;
type Story = StoryObj<typeof RootLayout>;

export const Primary: Story = {
    args: {
        children: 
            <div style={{blockSize: "300px", backgroundColor: "blue"} }>content</div>
    }
};

import type { Meta, StoryObj } from '@storybook/react';
import Crumb from "./Crumb";

const meta: Meta<typeof Crumb> = {
    title: 'ui/BreadCrumbs/Crumb',
    component: Crumb,
    args: {
        children: "title",
        href: ""
    }
};

export default meta;
type Story = StoryObj<typeof Crumb>;

export const Primary: Story = {}
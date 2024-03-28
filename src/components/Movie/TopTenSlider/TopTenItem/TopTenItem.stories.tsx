import type { Meta, StoryObj } from '@storybook/react';

import TopTenItem from "./TopTenItem";

const meta: Meta<typeof TopTenItem> = {
    title: 'movie/TopTenSlider/TopTenItem',
    component: TopTenItem,
};

export default meta;
type Story = StoryObj<typeof TopTenItem>;

export const Primary: Story = {
    render: () =>
        <div style={{ inlineSize: "300px", position: "relative" }}>
            <TopTenItem elem={{ id: 3, href: "" }} />
        </div>,
};
import type { Meta, StoryObj } from '@storybook/react';

import HeaderTitleTop from "./HeaderTitleTop";

const meta: Meta<typeof HeaderTitleTop> = {
    title: 'movie/TopTenSlider/HeaderTitleTop',
    component: HeaderTitleTop,
};

export default meta;
type Story = StoryObj<typeof HeaderTitleTop>;

export const Primary: Story = {
    render: () => <HeaderTitleTop />
};
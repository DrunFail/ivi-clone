import type { Meta, StoryObj } from '@storybook/nextjs';

import FilmTitleTop from './FilmTitleTop';

const meta: Meta<typeof FilmTitleTop> = {
    title: 'movie/TopTenSlider/FilmTitleTop',
    component: FilmTitleTop,
};

export default meta;
type Story = StoryObj<typeof FilmTitleTop>;

export const Primary: Story = {
    args: {
        rating: 5,
    },
};

import type { Meta, StoryObj } from '@storybook/nextjs';
import MovieListCardWithOverlay from './MovieListCardWithOverlay';
import { MOVIE_SINGLE } from '@/mockData/movieSingle';

const meta: Meta<typeof MovieListCardWithOverlay> = {
    title: 'movie/MovieListCardWithOverlay',
    component: MovieListCardWithOverlay,
    decorators: [
        (Story) => (
            <div style={{ inlineSize: '350px' }}>
                <Story />
            </div>
        ),
    ],
    args: {
        elem: MOVIE_SINGLE,
    },
};

export default meta;
type Story = StoryObj<typeof MovieListCardWithOverlay>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/nextjs';
import MovieListCardWithOverlay from './MovieListCardWithOverlay';

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
        overlayMovieData: {
            rating: ['5', '4'],
            duration: '120 минут',
            infoProduct: 'info',
            mainRatingPercentage: 58,
        },
        modifiedMovieData: {
            movieName: 'movie',
            moviePoster: './film.jpg',
        },
    },
};

export default meta;
type Story = StoryObj<typeof MovieListCardWithOverlay>;

export const Primary: Story = {};

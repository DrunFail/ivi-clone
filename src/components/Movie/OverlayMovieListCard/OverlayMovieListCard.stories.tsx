import type { Meta, StoryObj } from '@storybook/nextjs';
import OverlayMovieListCard from './OverlayMovieListCard';

const meta: Meta<typeof OverlayMovieListCard> = {
    title: 'movie/OverlayMovieListCard',
    component: OverlayMovieListCard,
    decorators: [
        (Story) => (
            <div
                style={{
                    inlineSize: '350px',
                    blockSize: '600px',
                    position: 'relative',
                }}
            >
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
        icons: 'icons',
    },
};

export default meta;
type Story = StoryObj<typeof OverlayMovieListCard>;

export const Primary: Story = {};

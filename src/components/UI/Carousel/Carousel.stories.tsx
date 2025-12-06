import type { Meta, StoryObj } from '@storybook/nextjs';
import { Title, Canvas } from '@storybook/addon-docs/blocks';

import Carousel from './Carousel';
import { Provider } from 'react-redux';
import store from '../../../store/store';
import { MOVIE_SLIDER_LIST } from '../../../mockData/movieSliderList';
import MovieListItemAdmin from '../../AdminDashboard/MovieListItemAdmin/MovieListItemAdmin';
import MovieListCardWithOverlay from '@/components/Movie/MovieListCardWithOverlay/MovieListCardWithOverlay';

const meta: Meta<typeof Carousel> = {
    title: 'ui/Carousel',
    component: Carousel,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <div style={{ backgroundColor: '#100e19' }}>
                    <Story />
                </div>
            </Provider>
        ),
    ],
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>MovieListAdmin</Title>
                    <Canvas of={MovieListAdmin} />

                    <Title>MovieListUser</Title>
                    <Canvas of={MovieListUser} />
                </>
            ),
        },
    },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

export const Primary: Story = {
    render: () => <Carousel data={MOVIE_SLIDER_LIST.rows} component={MovieListCardWithOverlay} />,
};

export const MovieListAdmin: Story = {
    render: () => <Carousel data={MOVIE_SLIDER_LIST.rows} component={MovieListItemAdmin} />,
};

export const MovieListUser: Story = {
    render: () => (
        <Carousel
            component={MovieListCardWithOverlay}
            data={MOVIE_SLIDER_LIST.rows}
            showMoreHandler={() => 'show more'}
        />
    ),
};

import type { Meta, StoryObj } from '@storybook/react';

import MovieListCard from "./MovieListCard";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof MovieListCard> = {
    title: 'movie/MovieListCard',
    component: MovieListCard,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <div style={{inlineSize: "350px"} }>
                        <Story />
                    </div>
                </WrapperIntl>
            </Provider>
    ],
    args: {
        modifiedMovieData: {
            movieName: "Название",
            moviePoster: "/film.jpg"
        }
    }
};

export default meta;
type Story = StoryObj<typeof MovieListCard>;

export const Primary: Story = {}
import type { Meta, StoryObj } from '@storybook/react';

import MoviePageModal from "./MoviePageModal";
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import { MOVIE_PAGE_MODAL_MOCK_DATA } from './mock/data';

const meta: Meta<typeof MoviePageModal> = {
    title: 'modals/MoviePageModal',
    component: MoviePageModal,
};

export default meta;
type Story = StoryObj<typeof MoviePageModal>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <MoviePageModal
                    film={MOVIE_PAGE_MODAL_MOCK_DATA}
                    visible
                    movieTitle="Movie Title"
                    movieYear={2023}
                    callback={() => console.log("callback")}
                    type=""
                />
            </WrapperIntl>
        </Provider>

    ,
};
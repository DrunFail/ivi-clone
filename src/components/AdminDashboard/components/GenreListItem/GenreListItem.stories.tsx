import type { Meta, StoryObj } from '@storybook/react';

import GenreListItem from "./GenreListItem";
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../../store/createStore';

const meta: Meta<typeof GenreListItem> = {
    title: 'GenreListItem',
    component: GenreListItem,
};

export default meta;
type Story = StoryObj<typeof GenreListItem>;

const genreItem = {
    id: 1,
    genreNameRu: "genre"
}

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <GenreListItem genreItem={genreItem} />
            </WrapperIntl>
        </Provider>
    ,
};
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../../../store/createStore';
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import data from '../../../mock/mock.json';
import MovieListItemWithLink from "./MovieListItemWithLink";

const meta: Meta<typeof MovieListItemWithLink> = {
    title: 'MovieListItemWithLink',
    component: MovieListItemWithLink,
};

export default meta;
type Story = StoryObj<typeof MovieListItemWithLink>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{ inlineSize: "300px", position: "relative" }}>
                    <MovieListItemWithLink elem={data.rows[0]} />
                </div>
            </WrapperIntl>
        </Provider>
    ,
};
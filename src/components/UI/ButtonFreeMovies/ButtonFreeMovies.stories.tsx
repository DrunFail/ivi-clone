import type { Meta, StoryObj } from '@storybook/react';

import ButtonFreeMovies from "./ButtonFreeMovies";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof ButtonFreeMovies> = {
    title: 'buttons/ButtonFreeMovies',
    component: ButtonFreeMovies,
};

export default meta;
type Story = StoryObj<typeof ButtonFreeMovies>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonFreeMovies />
            </WrapperIntl>
        </Provider>

    ,
};
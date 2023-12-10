import type { Meta, StoryObj } from '@storybook/react';

import ButtonTrailer from "./ButtonTrailer";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ButtonTrailer> = {
    title: 'buttons/ButtonTrailer',
    component: ButtonTrailer,
};

export default meta;
type Story = StoryObj<typeof ButtonTrailer>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonTrailer />
            </WrapperIntl>
        </Provider>

    ,
};
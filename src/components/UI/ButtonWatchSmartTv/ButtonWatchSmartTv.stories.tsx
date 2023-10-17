import type { Meta, StoryObj } from '@storybook/react';

import ButtonWatchSmartTv from "./ButtonWatchSmartTv";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ButtonWatchSmartTv> = {
    title: 'buttons/ButtonWatchSmartTv',
    component: ButtonWatchSmartTv,
};

export default meta;
type Story = StoryObj<typeof ButtonWatchSmartTv>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonWatchSmartTv />
            </WrapperIntl>
        </Provider>

    ,
};
import type { Meta, StoryObj } from '@storybook/react';

import ButtonWatchAllDevices from "./ButtonWatchAllDevices";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof ButtonWatchAllDevices> = {
    title: 'buttons/ButtonWatchAllDevices',
    component: ButtonWatchAllDevices,
};

export default meta;
type Story = StoryObj<typeof ButtonWatchAllDevices>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonWatchAllDevices />
            </WrapperIntl>
        </Provider>

    ,
};
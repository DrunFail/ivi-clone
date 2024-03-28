import type { Meta, StoryObj } from '@storybook/react';

import WatchAllDeviceTitle from "./WatchAllDeviceTitle";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';


const meta: Meta<typeof WatchAllDeviceTitle> = {
    title: 'movie/WatchAnyDevice/WatchAllDeviceTitle',
    component: WatchAllDeviceTitle,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceTitle>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <WatchAllDeviceTitle movieName={'movieName'}  />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
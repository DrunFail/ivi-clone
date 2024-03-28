import type { Meta, StoryObj } from '@storybook/react';

import WatchAllDeviceImage from "./WatchAllDeviceImage";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';


const meta: Meta<typeof WatchAllDeviceImage> = {
    title: 'movie/WatchAnyDevice/WatchAllDeviceImage',
    component: WatchAllDeviceImage,
};

export default meta;
type Story = StoryObj<typeof WatchAllDeviceImage>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <WatchAllDeviceImage moviePosterUrl='./film.jpg' />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
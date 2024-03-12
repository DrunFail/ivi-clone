import type { Meta, StoryObj } from '@storybook/react';

import WatchAnyDevice from "./WatchAnyDevice";
import { Provider } from 'react-redux';
import store from '../../store/store';
import WrapperIntl from '../WrapperIntl/WrapperIntl';
import PageWrapper from '../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof WatchAnyDevice> = {
    title: 'WatchAnyDevice',
    component: WatchAnyDevice,
};

export default meta;
type Story = StoryObj<typeof WatchAnyDevice>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <WatchAnyDevice movieName="movieName" moviePosterUrl=""  />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
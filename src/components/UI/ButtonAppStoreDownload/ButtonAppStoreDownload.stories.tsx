import type { Meta, StoryObj } from '@storybook/react';

import ButtonAppStoreDownload from "./ButtonAppStoreDownload";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../store/createStore';

const meta: Meta<typeof ButtonAppStoreDownload> = {
    title: 'buttons/ButtonAppStoreDownload',
    component: ButtonAppStoreDownload,
};

export default meta;
type Story = StoryObj<typeof ButtonAppStoreDownload>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonAppStoreDownload />
            </WrapperIntl>
        </Provider>
    ,
};
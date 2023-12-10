import type { Meta, StoryObj } from '@storybook/react';

import ButtonGoogleDownload from "./ButtonGoogleDownload";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../store/createStore';

const meta: Meta<typeof ButtonGoogleDownload> = {
    title: 'buttons/ButtonGoogleDownload',
    component: ButtonGoogleDownload,
};

export default meta;
type Story = StoryObj<typeof ButtonGoogleDownload>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonGoogleDownload />
            </WrapperIntl>
        </Provider>
    ,
};
import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import DownloadAppLinkBlock from "./DownloadAppLinkBlock";
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import store from '../../../store/store';

const meta: Meta<typeof DownloadAppLinkBlock> = {
    title: 'DownloadAppLinkBlock',
    component: DownloadAppLinkBlock,
};

export default meta;
type Story = StoryObj<typeof DownloadAppLinkBlock>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <DownloadAppLinkBlock variant={'desktop'} />
            </WrapperIntl>
        </Provider>
};
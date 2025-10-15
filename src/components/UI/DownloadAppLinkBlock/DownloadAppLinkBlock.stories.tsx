import type { Meta, StoryObj } from '@storybook/nextjs';
import { Provider } from 'react-redux';
import DownloadAppLinkBlock from './DownloadAppLinkBlock';
import store from '../../../store/store';

const meta: Meta<typeof DownloadAppLinkBlock> = {
    title: 'DownloadAppLinkBlock',
    component: DownloadAppLinkBlock,
};

export default meta;
type Story = StoryObj<typeof DownloadAppLinkBlock>;

export const Primary: Story = {
    render: () => (
        <Provider store={store}>
            <DownloadAppLinkBlock>app links</DownloadAppLinkBlock>
        </Provider>
    ),
};

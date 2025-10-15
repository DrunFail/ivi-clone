import type { Meta, StoryObj } from '@storybook/nextjs';
import DownloadAppLink from './DownloadAppLink';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const meta: Meta<typeof DownloadAppLink> = {
    title: 'UI/DownloadAppLink',
    component: DownloadAppLink,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    args: {
        variant: 'apple',
    },
};

export default meta;
type Story = StoryObj<typeof DownloadAppLink>;

export const Primary: Story = {};

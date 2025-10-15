import type { Meta, StoryObj } from '@storybook/nextjs';

import TextField from './TextField';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const meta: Meta<typeof TextField> = {
    title: 'ui/TextField',
    component: TextField,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {};

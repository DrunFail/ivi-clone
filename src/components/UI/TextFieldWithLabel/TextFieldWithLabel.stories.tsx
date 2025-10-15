import type { Meta, StoryObj } from '@storybook/nextjs';

import TextFieldWithLabel from './TextFieldWithLabel';
import { Provider } from 'react-redux';
import store from '../../../store/store';

const meta: Meta<typeof TextFieldWithLabel> = {
    title: 'ui/TextFieldWithLabel',
    component: TextFieldWithLabel,
    decorators: [
        (Story) => (
            <Provider store={store}>
                <Story />
            </Provider>
        ),
    ],
    args: {
        id: 'Label',
        labelText: 'Label',
    },
};

export default meta;
type Story = StoryObj<typeof TextFieldWithLabel>;

export const Primary: Story = {};

import type { Meta, StoryObj } from '@storybook/react';

import TextField from "./TextField";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof TextField> = {
    title: 'ui/TextField',
    component: TextField,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Primary: Story = {};
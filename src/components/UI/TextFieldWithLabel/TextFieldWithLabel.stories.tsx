import type { Meta, StoryObj } from '@storybook/react';

import TextFieldWithLabel from "./TextFieldWithLabel";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof TextFieldWithLabel> = {
    title: 'ui/TextFieldWithLabel',
    component: TextFieldWithLabel,
    decorators: [
        Story =>
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ],
    args: {
        id: "Label",
        labelText: "Label"
    }
};

export default meta;
type Story = StoryObj<typeof TextFieldWithLabel>;

export const Primary: Story = {};
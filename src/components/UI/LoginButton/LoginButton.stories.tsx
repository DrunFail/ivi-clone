import type { Meta, StoryObj } from '@storybook/react';

import LoginButton from "./LoginButton";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof LoginButton> = {
    title: 'buttons/LoginButton',
    component: LoginButton,
    decorators: [
        Story => 
            <Provider store={store}>
                <WrapperIntl>
                    <Story />
                </WrapperIntl>
            </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const Primary: Story = {};
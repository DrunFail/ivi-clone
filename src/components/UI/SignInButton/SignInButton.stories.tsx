import type { Meta, StoryObj } from '@storybook/react';

import SignInButton from "./SignInButton";
import store from '../../../store/createStore';
import { Provider } from 'react-redux';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof SignInButton> = {
    title: 'buttons/SignInButton',
    component: SignInButton,
};

export default meta;
type Story = StoryObj<typeof SignInButton>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <SignInButton />
            </WrapperIntl>
        </Provider>

    ,
};
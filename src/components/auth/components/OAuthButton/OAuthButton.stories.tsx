import type { Meta, StoryObj } from '@storybook/react';
import OAuthButton from "./OAuthButton";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import store from '../../../../store/store';

const meta: Meta<typeof OAuthButton> = {
    title: 'auth/OAuthButton',
    component: OAuthButton,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ],
    args: {
        variant: "vk"
    }
};

export default meta;
type Story = StoryObj<typeof OAuthButton>;

export const Primary: Story = {}
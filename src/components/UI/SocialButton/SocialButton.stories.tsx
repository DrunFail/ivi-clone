import type { Meta, StoryObj } from '@storybook/react';
import SocialButton from "./SocialButton";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof SocialButton> = {
    title: 'UI/SocialButton',
    component: SocialButton,
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
type Story = StoryObj<typeof SocialButton>;

export const Primary: Story = {
    
}
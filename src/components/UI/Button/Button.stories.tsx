import type { Meta, StoryObj } from '@storybook/react';
import Button from "./Button";
import { Provider } from 'react-redux';
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof Button> = {
    title: 'UI/Button',
    component: Button,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ],
   
};

export default meta;
type Story = StoryObj<typeof Button>;

export const ButtonAsLink: Story = {
    args: {
        as: "link",
        children: "button",
        href: "/ivi",
        color: "red"
    }
}

export const ButtonAsButton: Story = {
    args: {
        as: "button",
        children: "button",
        
        
    }
}
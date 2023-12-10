//import MyInput from './MyInput'

//export default {
//    title: 'MyInput',
//    component: MyInput
//}

//export const Default = ()=><MyInput placeholderId="Search"/>


import type { Meta, StoryObj } from '@storybook/react';
import MyInput from "./MyInput";
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Provider } from 'react-redux';
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';

const meta: Meta<typeof MyInput> = {
    title: 'MyInput',
    component: MyInput,
    decorators: [
        Story => <Provider store={store}>
            <WrapperIntl>
                <Story />
            </WrapperIntl>
        </Provider>
    ]
};

export default meta;
type Story = StoryObj<typeof MyInput>;

export const Primary: Story = {}
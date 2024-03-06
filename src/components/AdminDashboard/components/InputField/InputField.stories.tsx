import type { Meta, StoryObj } from '@storybook/react';

import InputField from "./InputField";
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import { ChangeEvent } from 'react';

const meta: Meta<typeof InputField> = {
    title: 'InputField',
    component: InputField,
};

export default meta;
type Story = StoryObj<typeof InputField>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <InputField intlId={'genre.newNameRu'} value={'value'} name={'name'} changeHandler={function(e: ChangeEvent<HTMLInputElement>): void {
                    throw new Error('Function not implemented.');
                } } />
            </WrapperIntl>
        </Provider>
    ,
};
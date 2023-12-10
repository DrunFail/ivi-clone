import type { Meta, StoryObj } from '@storybook/react';

import ButtonDetails from "./ButtonDetails";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof ButtonDetails> = {
    title: 'buttons/ButtonDetails',
    component: ButtonDetails,
};

export default meta;
type Story = StoryObj<typeof ButtonDetails>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonDetails />
            </WrapperIntl>
        </Provider>

    ,
};
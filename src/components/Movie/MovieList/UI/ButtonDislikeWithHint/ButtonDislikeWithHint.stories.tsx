import type { Meta, StoryObj } from '@storybook/react';
import { Provider } from 'react-redux';
import store from '../../../../../store/createStore';
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';

import ButtonDislikeWithHint from "./ButtonDislikeWithHint";

const meta: Meta<typeof ButtonDislikeWithHint> = {
    title: 'ButtonDislikeWithHint',
    component: ButtonDislikeWithHint,
};

export default meta;
type Story = StoryObj<typeof ButtonDislikeWithHint>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <ButtonDislikeWithHint />
            </WrapperIntl>
        </Provider>
};

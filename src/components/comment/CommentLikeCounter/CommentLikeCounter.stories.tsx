import type { Meta, StoryObj } from '@storybook/react';

import CommentLikeCounter from "./CommentLikeCounter";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof CommentLikeCounter> = {
    title: 'comment/CommentLikeCounter',
    component: CommentLikeCounter,
};

export default meta;
type Story = StoryObj<typeof CommentLikeCounter>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <CommentLikeCounter />
            </WrapperIntl>
        </Provider>

    ,
};
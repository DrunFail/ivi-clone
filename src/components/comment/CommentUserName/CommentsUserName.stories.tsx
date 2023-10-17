import type { Meta, StoryObj } from '@storybook/react';

import CommentsUserName from "./CommentUserName";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof CommentsUserName> = {
    title: 'comment/CommentsUserName',
    component: CommentsUserName,
};

export default meta;
type Story = StoryObj<typeof CommentsUserName>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <CommentsUserName />
            </WrapperIntl>
        </Provider>

    ,
};
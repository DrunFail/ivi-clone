import type { Meta, StoryObj } from '@storybook/react';

import CommentsUserName from "./CommentUserName";
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';

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
                <CommentsUserName userName={'userName'} />
            </WrapperIntl>
        </Provider>

    ,
};
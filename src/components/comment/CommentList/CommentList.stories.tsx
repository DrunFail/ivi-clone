import type { Meta, StoryObj } from '@storybook/react';

import CommentList from "./CommentList";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof CommentList> = {
    title: 'comment/CommentList',
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
            <PageWrapper>
                    <CommentList />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
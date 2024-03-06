import type { Meta, StoryObj } from '@storybook/react';

import CommentBody from "./CommentBody";
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof CommentBody> = {
    title: 'comment/CommentBody',
    component: CommentBody,
};

export default meta;
type Story = StoryObj<typeof CommentBody>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <CommentBody commentBody={'comment'} />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
import type { Meta, StoryObj } from '@storybook/react';

import CommentBody from "./CommentBody";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

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
                    <CommentBody />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
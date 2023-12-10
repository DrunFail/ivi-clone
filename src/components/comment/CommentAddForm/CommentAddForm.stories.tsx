import type { Meta, StoryObj } from '@storybook/react';

import CommentAddForm from "./CommentAddForm";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';

const meta: Meta<typeof CommentAddForm> = {
    title: 'comment/CommentAddForm',
    component: CommentAddForm,
};

export default meta;
type Story = StoryObj<typeof CommentAddForm>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <CommentAddForm />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
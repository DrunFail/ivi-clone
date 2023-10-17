import type { Meta, StoryObj } from '@storybook/react';

import CommentDateCreated from "./CommentDateCreated";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof CommentDateCreated> = {
    title: 'comment/CommentDateCreated',
    component: CommentDateCreated,
};

export default meta;
type Story = StoryObj<typeof CommentDateCreated>;

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                    <CommentDateCreated />
            </WrapperIntl>
        </Provider>

    ,
};
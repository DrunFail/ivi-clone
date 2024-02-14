import type { Meta, StoryObj } from '@storybook/react';

import CommentDateCreated from "./CommentDateCreated";
import { Provider } from 'react-redux';
import store from '../../../../store/createStore';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';

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
                    <CommentDateCreated commentDate={'comment date'} />
            </WrapperIntl>
        </Provider>

    ,
};
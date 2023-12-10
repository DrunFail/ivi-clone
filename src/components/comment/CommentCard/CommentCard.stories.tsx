import type { Meta, StoryObj } from '@storybook/react';

import CommentCard from "./CommentCard";
import store from '../../../store/createStore';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';

const meta: Meta<typeof CommentCard> = {
    title: 'comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const comment = {
    id: 4,
    filmId: 1111,
    text: "dkdkd",
    name: "skdkdk",
    reviews: [],
    createdAt: "11"
}

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{inlineSize: "350px"} }>
                    <CommentCard elem={comment} />
                </div>
            </WrapperIntl>
        </Provider>

    ,
};
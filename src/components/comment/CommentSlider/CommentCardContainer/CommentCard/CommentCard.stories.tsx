import type { Meta, StoryObj } from '@storybook/react';

import CommentCard from "./CommentCard";
import { Provider } from 'react-redux';
import WrapperIntl from '../../../../WrapperIntl/WrapperIntl';
import store from '../../../../../store/store';

const meta: Meta<typeof CommentCard> = {
    title: 'comment/CommentCard',
    component: CommentCard,
};

export default meta;
type Story = StoryObj<typeof CommentCard>;

const comment = {
    commentCreatedDate: "14 апреля 2022",
    commentAuthor: "author",
    commentBody: "body",
    commentChildList: [],
    movieKinopoiskId: 1111,
    commentId: 4
}

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <div style={{inlineSize: "350px"} }>
                    <CommentCard modifiedCommentData={comment} callback={() => console.log('click') } />
                </div>
            </WrapperIntl>
        </Provider>

    ,
};
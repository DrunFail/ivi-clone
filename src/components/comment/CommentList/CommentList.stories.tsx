import type { Meta, StoryObj } from '@storybook/react';

import CommentList from "./CommentList";
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import { Provider } from 'react-redux';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import { ReviewTree } from '../../../models/types';

const meta: Meta<typeof CommentList> = {
    title: 'comment/CommentList',
    component: CommentList,
};

export default meta;
type Story = StoryObj<typeof CommentList>;

const commentData: ReviewTree[] = [
    {
        id: 106,
        filmId: 535341,
        title: "",
        text: "dkdkd",
        path: "",
        depth: 0,
        childsNum: 0,
        parentId: null,
        createdAt: "2024-03-09T11:18:16.343Z",
        updatedAt: "2024-03-09T11:18:16.343Z",
        profile: {
            id: 11,
            username: "Ужасный Программист",
            name: null,
            lastName: null,
            favMovie: null,
            avatarId: null
        }
    },
    {
        id: 105,
        filmId: 535341,
        title: "",
        text: "hjbnbnbn",
        path: "",
        depth: 0,
        childsNum: 0,
        parentId: null,
        createdAt: "2024-03-09T11:03:44.352Z",
        updatedAt: "2024-03-09T11:03:44.352Z",
        profile: {
            id: 2,
            username: "Мягкий Пессимист",
            name: null,
            lastName: null,
            favMovie: null,
            avatarId: null
        }
    }
]


export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
            <PageWrapper>
                    <CommentList commentData={commentData} />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
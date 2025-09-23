import type { Meta, StoryObj } from "@storybook/react";

import CommentPageContent from "./CommentPageContent";

const meta: Meta<typeof CommentPageContent> = {
    title: "comment/CommentPageContent",
    component: CommentPageContent,
};

export default meta;
type Story = StoryObj<typeof CommentPageContent>;

export const Primary: Story = {
    args: {
        movieKinopoiskId: 20,
        commentTree: [
            {
                id: 1,
                filmId: 3,
                profile: {
                    id: 4,
                    username: "author",
                    name: "",
                    lastName: "",
                    avatarId: 4,
                    favMovie: ""
                },
                text: "comment 1",
                createdAt: "2024-05-29T10:17:14.996Z",
                childs: [],
                title: "",
                parentId: null
                
            },
            {
                id: 1,
                filmId: 3,
                profile: {
                    id: 4,
                    username: "author",
                    name: "",
                    lastName: "",
                    avatarId: 4,
                    favMovie: ""
                },
                text: "comment 2",
                createdAt: "2024-05-29T10:17:14.996Z",
                childs: [
                    {
                        id: 1,
                        filmId: 3,
                        profile: {
                            id: 4,
                            username: "author",
                            name: "",
                            lastName: "",
                            avatarId: 4,
                            favMovie: ""
                        },
                        text: "comment 1",
                        createdAt: "2024-05-29T10:17:14.996Z",
                        childs: [],
                        title: "",
                        parentId: null
                    },
                    {
                        id: 1,
                        filmId: 3,
                        profile: {
                            id: 4,
                            username: "author",
                            name: "",
                            lastName: "",
                            avatarId: 4,
                            favMovie: ""
                        },
                        text: "comment 2",
                        createdAt: "2024-05-29T10:17:14.996Z",
                        childs: [],
                        title: "",
                        parentId: null
                    },
                ],
                title: "",
                parentId: null
            },
        ]
    }
};
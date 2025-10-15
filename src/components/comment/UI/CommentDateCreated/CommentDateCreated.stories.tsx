import type { Meta, StoryObj } from '@storybook/nextjs';

import CommentDateCreated from './CommentDateCreated';

const meta: Meta<typeof CommentDateCreated> = {
    title: 'comment/ui/CommentDateCreated',
    component: CommentDateCreated,
};

export default meta;
type Story = StoryObj<typeof CommentDateCreated>;

export const Primary: Story = {
    args: {
        commentDate: 'comment date',
    },
};

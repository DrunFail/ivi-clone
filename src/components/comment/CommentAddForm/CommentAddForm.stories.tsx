import type { Meta, StoryObj } from '@storybook/nextjs';

import CommentAddForm from './CommentAddForm';

const meta: Meta<typeof CommentAddForm> = {
    title: 'comment/CommentAddForm',
    component: CommentAddForm,
};

export default meta;
type Story = StoryObj<typeof CommentAddForm>;

export const Primary: Story = {
    args: {
        action: () => console.log('action'),
        inputId: 'input',
        movieKinopoiskId: 5,
        parentId: 45,
    },
};

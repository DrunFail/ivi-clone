import type { Meta, StoryObj } from '@storybook/nextjs';
import ButtonPlayerBlock from './ButtonPlayerBlock';

const meta: Meta<typeof ButtonPlayerBlock> = {
    title: 'movie/ButtonPlayerBlock',
    component: ButtonPlayerBlock,
    args: {
        movieName: '',
        moviePosterUrl: '',
        movieYear: 2022,
    },
};

export default meta;
type Story = StoryObj<typeof ButtonPlayerBlock>;

export const Desktop: Story = {
    args: {
        variant: 'desktop',
    },
};
export const Tablet: Story = {
    args: {
        variant: 'tablet',
    },
};
export const Mobile: Story = {
    args: {
        variant: 'mobile',
    },
};

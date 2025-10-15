import type { Meta, StoryObj } from '@storybook/nextjs';

import MovieFilterFormGridTemplate from './MovieFilterFormGridTemplate';

const meta: Meta<typeof MovieFilterFormGridTemplate> = {
    title: 'filters/MovieFilterFormGridTemplate',
    component: MovieFilterFormGridTemplate,
};

export default meta;
type Story = StoryObj<typeof MovieFilterFormGridTemplate>;

const WrapperBackground = ({ children }: { children: React.ReactNode }) => {
    return <div style={{ background: 'grey' }}>{children}</div>;
};

const filters = Array.from({ length: 8 }, (_, i) => i++);

export const Primary: Story = {
    args: {
        children: (
            <>
                {filters.map((filter) => (
                    <WrapperBackground key={filter}>{`filter ${filter}`}</WrapperBackground>
                ))}
            </>
        ),
    },
};

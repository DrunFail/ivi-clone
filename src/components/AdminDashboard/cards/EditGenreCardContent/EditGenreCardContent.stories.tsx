import type { Meta, StoryObj } from '@storybook/nextjs';

import EditGenreCardContent from './EditGenreCardContent';
import { Genre } from '../../../../models/types';

const meta: Meta<typeof EditGenreCardContent> = {
    title: 'admin/card/EditGenreCardContent',
    component: EditGenreCardContent,
};

export default meta;
type Story = StoryObj<typeof EditGenreCardContent>;

const genre: Genre = { id: 1000, genreNameEng: 'eng', genreNameRu: 'ru' };

export const Primary: Story = {
    args: {
        handleChangeNewGenreName: () => console.log('change'),
        newGenreName: {
            genreNameEng: 'genreNameEng',
            genreNameRu: 'genreNameRu',
        },
        genreItem: genre,
    },
};

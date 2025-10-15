import type { Meta, StoryObj } from '@storybook/nextjs';
import { Title, Canvas } from '@storybook/addon-docs/blocks';

import EditCardContainer from './EditCardContainer';
import EditMovieCardContent from '../cards/EditMovieCardContent/EditMovieCardContent';
import DeleteMovieCardContent from '../cards/DeleteMovieCardContent/DeleteMovieCardContent';
import EditGenreCardContent from '../cards/EditGenreCardContent/EditGenreCardContent';
import { MOVIE_SINGLE } from '../../../mockData/movieSingle';

const meta: Meta<typeof EditCardContainer> = {
    title: 'admin/EditCardContainer',
    component: EditCardContainer,
    tags: ['autodocs'],
    parameters: {
        docs: {
            page: () => (
                <>
                    <Title>EditMovieForm</Title>
                    <Canvas of={EditMovieForm} />

                    <Title>DeleteMovieForm</Title>
                    <Canvas of={DeleteMovieForm} />

                    <Title>EditMovieGenreForm</Title>
                    <Canvas of={EditMovieGenreForm} />
                </>
            ),
        },
    },
};

export default meta;
type Story = StoryObj<typeof EditCardContainer>;

const menu = [
    { id: 1, name: 'option1', link: '' },
    { id: 2, name: 'option2', link: '' },
];

export const Primary: Story = {
    render: () => (
        <EditCardContainer handleCloseEdit={() => console.log('edit')} handleSubmit={() => console.log('submit')}>
            card component
        </EditCardContainer>
    ),
};

export const EditMovieForm: Story = {
    args: {
        children: (
            <EditMovieCardContent
                handleChangeNewMovieName={() => 'changer'}
                countries="countries"
                genres="genres"
                elem={MOVIE_SINGLE}
                newMovieName={{ nameOriginal: '', nameRu: '' }}
            />
        ),
    },
};

export const DeleteMovieForm: Story = {
    args: {
        children: <DeleteMovieCardContent posterUrlPreview="" nameRu="" />,
    },
};

export const EditMovieGenreForm: Story = {
    args: {
        children: (
            <EditGenreCardContent
                genreItem={{ id: 1, genreNameEng: 'genreName', genreNameRu: '' }}
                handleChangeNewGenreName={() => ''}
                newGenreName={{ genreNameEng: '', genreNameRu: '' }}
            />
        ),
    },
};

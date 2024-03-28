import type { Meta, StoryObj } from '@storybook/react';

import EditGenreCardContent from "./EditGenreCardContent";
import { Provider } from 'react-redux';
import store from '../../../../store/store';
import WrapperIntl from '../../../WrapperIntl/WrapperIntl';
import { Genre } from '../../../../models/types';

const meta: Meta<typeof EditGenreCardContent> = {
    title: 'admin/card/EditGenreCardContent',
    component: EditGenreCardContent,
};

export default meta;
type Story = StoryObj<typeof EditGenreCardContent>;

const genre: Genre = { id: 1000, genreNameEng: "eng", genreNameRu: "ru"}


export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <EditGenreCardContent
                    handleChangeNewGenreName={() => console.log("change")}
                    newGenreName={{genreNameEng: "genreNameEng", genreNameRu: "genreNameRu"} }
                    genreItem={genre }
                />
            </WrapperIntl>
        </Provider>

    ,
};
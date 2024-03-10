import type { Meta, StoryObj } from '@storybook/react';

import FiltersField from "./FiltersField";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import { FilterParams } from '../hooks/useFiltersWatchPage';

const meta: Meta<typeof FiltersField> = {
    title: 'filters/FiltersField',
    component: FiltersField,
};

export default meta;
type Story = StoryObj<typeof FiltersField>;

const genreObjects = [
    {
        createdAt: "",
        genreNameEng: "жанр1",
        genreNameRu: "genre1",
        id: 1,
        updatedAt: ""
    },
    {
        createdAt: "",
        genreNameEng: "жанр2",
        genreNameRu: "genre2",
        id: 2,
        updatedAt: ""
    }

]

const countryObjects = [
    {
        createdAt: "",
        countryNameEng: "страна1",
        countryNameRu: "country1",
        id: 1,
        updatedAt: ""
    },
    {
        createdAt: "",
        countryNameEng: "страна2",
        countryNameRu: "country2",
        id: 2,
        updatedAt: ""
    }
]


const filterParams: FilterParams = {
    genreId: 1,
    countryId: 1,
    DIRECTOR: "",
    ACTOR: "",
    directorId: 0,
    actorId: 0,
    orderBy: "ratingKinopoisk",
    ratingKinopoisk: 0,
    ratingKinopoiskVoteCount: 0,
}

const handler = (filterKey: string, filterValue: string | number) => console.log('click')

export const Primary: Story = {
    render: () =>
        <Provider store={store}>
            <WrapperIntl>
                <PageWrapper>
                    <FiltersField
                        genreObjects={genreObjects}
                        countryObjects={countryObjects}
                        filterParams={filterParams}
                        setFilterParams={handler}
                        clearFiltersWithoutSort={() => console.log('click')}
                        variant="genrePage"
                    />
                </PageWrapper>
            </WrapperIntl>
        </Provider>

    ,
};
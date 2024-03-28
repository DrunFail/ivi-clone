import type { Meta, StoryObj } from '@storybook/react';

import FiltersField from "./FiltersField";
import { Provider } from 'react-redux';
import store from '../../../store/store';
import WrapperIntl from '../../WrapperIntl/WrapperIntl';
import PageWrapper from '../../PageContainers/PageWrapper/PageWrapper';
import { FilterParams } from '../../../hooks/filters/useFiltersWatchPage';
import { LinkData } from '../../../models/global';

const meta: Meta<typeof FiltersField> = {
    title: 'filters/FiltersField',
    component: FiltersField,
};

export default meta;
type Story = StoryObj<typeof FiltersField>;

const genreObjects:LinkData[] = [
    {
       
        name: "жанр1",
        link: "",
    },
    {
        
        name: "жанр2",
        link: "genre2",
    }

]

const countryObjects:LinkData[] = [
    {
      
        name: "страна1",
        link: "country1",
        
    },
    {
       
        name: "страна2",
        link: "country2",
       
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
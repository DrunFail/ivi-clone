'use server';

import { MovieAPI } from '../../api/MovieAPI';
import { ResponseWithCountAndRows } from '../../models/response';
import { Movie, MovieFilterParams, MovieSortBy } from '../../models/types';

type State = {
    movie: ResponseWithCountAndRows<Movie>;
    isShowChangePageButton: boolean;
};

type RequiredMovieFilterParams = Pick<
    MovieFilterParams,
    'page' | 'size' | 'ratingKinopoisk' | 'ratingKinopoiskVoteCount' | 'orderBy'
>;
type UnrequiredMovieFilterParms = Omit<Partial<MovieFilterParams>, keyof RequiredMovieFilterParams>;
type UnionMovieFilterParams = RequiredMovieFilterParams & UnrequiredMovieFilterParms;

export async function formFieldAction(state: State, formData: FormData) {
    const filterParams: UnionMovieFilterParams = {
        size: Number(formData.get('size')),
        page: Number(formData.get('page')),
        genreId: Number(formData.get('genreId')) || undefined,
        countryId: Number(formData.get('countryId')) || undefined,
        DIRECTOR: (formData.get('DIRECTOR') as string) || undefined,
        ACTOR: (formData.get('ACTOR') as string) || undefined,
        ratingKinopoisk: Number(formData.get('ratingKinopoisk')),
        ratingKinopoiskVoteCount: Number(formData.get('ratingKinopoiskVoteCount')),
        orderBy: formData.get('orderBy') as MovieSortBy,
    };

    const newMovieSet = await MovieAPI.getFilteredMovie(filterParams);

    const isShowChangePageButton = filterParams.size * (filterParams.page + 1) < newMovieSet.count;

    //if not first download movie list
    if (filterParams.page) {
        // if first movie set length > parameter "size"
        if (state.movie.rows.length > filterParams.size && filterParams.page === 1) {
            const slicedFirstMovieSet = state.movie.rows.slice(0, filterParams.size);

            return {
                ...state,
                isShowChangePageButton,
                movie: {
                    ...state.movie,
                    rows: [...slicedFirstMovieSet, ...newMovieSet.rows],
                },
            };
        }
        return {
            ...state,
            isShowChangePageButton,
            movie: {
                ...state.movie,
                rows: [...state.movie.rows, ...newMovieSet.rows],
            },
        };
    }
    //if page was reload(first movie set load)
    return { movie: newMovieSet, isShowChangePageButton: isShowChangePageButton };
}

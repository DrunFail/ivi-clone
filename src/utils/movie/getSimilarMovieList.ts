import { movieAPI } from '@/lib/api/movieAPI';
import { MovieById } from '@/models/types';

export async function getSimilarMovieList(movie: MovieById) {
    const hasSimilar = !!movie.film.similar.length;
    if (hasSimilar) {
        return { rows: movie.film.similar, count: movie.film.similar.length, isSimilarList: hasSimilar };
    }
    const currentMovieFirstGenre = movie.film.genres[0].id;

    const similarMovieList = await movieAPI.getFilteredMovie({ genreId: currentMovieFirstGenre });
    if (!similarMovieList) {
        return { rows: [], count: 0, isSimilarList: false };
    }
    return { rows: similarMovieList.rows, count: similarMovieList?.count, isSimilarList: hasSimilar };
}

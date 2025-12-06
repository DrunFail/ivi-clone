import { Locale } from '@/i18n/type';
import { MovieById } from '@/models/types';
import { calculateCountryName } from '@/utils/calculateCountryName';
import { calculateGenreName } from '@/utils/calculateGenreName';
import { calculateMovieName } from '@/utils/calculateMovieName';
import { minHours } from '@/utils/minHours';

export function transformMovieData({ movie, locale }: { movie: MovieById; locale: Locale }) {
    const movieTitle = calculateMovieName(movie.film, locale);
    const movieDuration = minHours(Number(movie.film.filmLength));
    const ageLimit = movie.film.ratingAgeLimits?.replace('age', '') || '18';
    const movieCountry = calculateCountryName(movie.film.countries[0], locale);
    const movieGenre = calculateGenreName(movie.film.genres[0], locale);

    return {
        movieTitle,
        movieDuration,
        ageLimit,
        movieCountry,
        movieGenre,
    };
}

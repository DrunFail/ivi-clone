import { Movie, SimilarMovie } from '../../models/types';
import { calculateMovieName } from '../../utils/calculateMovieName';
import { calculateDurationMovie } from '../../utils/calculateDurationMovie';
import { calculateMovieRating } from '../../utils/calculateMovieRating';
import { getInfoProduct } from '../../utils/getInfoProduct';
import { useLocale } from 'next-intl';

interface UseMovieListCardDataProps<T extends Movie | SimilarMovie> {
    movieData: T;
}

export default function useMovieListCardData<T extends Movie | SimilarMovie>({
    movieData,
}: UseMovieListCardDataProps<T>) {
    const lang = useLocale() as 'ru' | 'en';

    const movieName = calculateMovieName(movieData, lang);
    const moviePoster = movieData.posterUrlPreview || movieData.posterUrl;

    if ('filmId' in movieData) {
        return { modifiedMovieData: { movieName, moviePoster }, movieLink: `/movie/${movieData.filmId}` };
    }
    const movieLink = `/movie/${movieData.kinopoiskId}`;

    const mainRatingPercentage = movieData.ratingKinopoisk ? +movieData.ratingKinopoisk * 10 : 0;

    const productData = getInfoProduct(movieData);

    const duration = calculateDurationMovie(movieData.filmLength);

    const rating = calculateMovieRating(movieData.ratingKinopoisk);

    return {
        modifiedMovieData: { movieName, moviePoster },
        overlayMovieData: { rating, mainRatingPercentage, infoProduct: productData.infoProduct, duration },
        movieLink,
        countries: productData.countries,
        genres: productData.genres,
    };
}

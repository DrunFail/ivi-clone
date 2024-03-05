import { useSelector } from "react-redux";
import { Movie } from "../../../models/types";
import { calculateMovieName } from "../../../utils/calculateMovieName";
import { calculateMovieRating } from "../../../utils/calculateMovieRating";
import { calculateDurationMovie } from "../../../utils/calculateDurationMovie";
import { getLang } from "../../../store/slices/switchLang";

interface UseMovieListCardDataProps {
    movieData: Movie
}
export default function useMovieListCardData({ movieData }: UseMovieListCardDataProps) {
    const lang = useSelector(getLang());


    const movieName = calculateMovieName(movieData, lang);
    const moviePoster = movieData.posterUrl;


    const mainRatingPercentage = movieData.ratingKinopoisk ? +movieData.ratingKinopoisk * 10 : 0;

    const yearRelease = movieData.year;
    const countries = movieData.countries.map(country => country.countryNameRu).join(',');
    const genres = movieData.genres.map(genre => genre.genreNameRu).join(',');
    

    const infoProduct = `${yearRelease},${countries},${genres}`;


    const duration = calculateDurationMovie(movieData.filmLength);

    const rating = calculateMovieRating(movieData.ratingKinopoisk);


    const movieLink = `/movie/${movieData.kinopoiskId}`;

    return (
        {
            modifiedMovieData: { movieName, moviePoster },
            overlayMovieData: { rating, mainRatingPercentage, infoProduct, duration },
            movieLink,
            countries,
            genres
        }
    )
}
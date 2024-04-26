import { useSelector } from "react-redux";
import { MovieById } from "../../models/types";
import { getLang } from "../../store/slices/switchLang";
import { calculateGenreName } from "../../utils/calculateGenreName";
import { calculateCountryName } from "../../utils/calculateCountryName";
import { calculateMovieName } from "../../utils/calculateMovieName";
import { minHours } from "../../utils/minHours";
import { getInfoProduct } from "../../utils/getInfoProduct";


interface UseMoviePageDataProps {
    movieData: MovieById | undefined
}

export default function useMoviePageData({ movieData }: UseMoviePageDataProps) {
    const lang = useSelector(getLang())

    if (!movieData) return null;
    const movieName = calculateMovieName(movieData.film, lang);
    const movieDuration = minHours(Number(movieData.film.filmLength))
    const ageLimit = movieData.film.ratingAgeLimits.replace("age", "")
    const firstCounry = movieData.film.countries[0];
    const movieCountry = calculateCountryName(firstCounry, lang);
    const firstGenre = movieData.film.genres[0]
    const movieGenre = calculateGenreName(firstGenre,lang)
    const movieInfo = getInfoProduct(movieData.film)
   

    
   

    return {
        movieDuration,
        ageLimit,
        movieInfo,
        movieYear: movieData.film.year,
        movieName,
        movieDescription: movieData.film.description,
        movieCountry,
        movieGenre,
        moviePosterUrl: movieData.film.posterUrl,
        movieRating: Number(movieData.film.ratingKinopoisk),
        similarMovieList: movieData.film.similar
    };
}
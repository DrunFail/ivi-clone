import { useSelector } from "react-redux";
import { MovieById } from "../../../models/types";
import { getLang } from "../../../store/slices/switchLang";

interface UseMoviePageDataProps {
    movieData: MovieById
}

export default function useMoviePageData({ movieData }: UseMoviePageDataProps) {
    const lang = useSelector(getLang())
    function minHours(mins: number) {
        const hours = Math.trunc(mins / 60);
        const minutes = mins % 60;
        return { hours, minutes }
    }
    const movieDuration = minHours(Number(movieData?.film?.filmLength))

    const ageLimit = movieData?.film?.ratingAgeLimits?.replace("age", "")
    const calculateMovieName = (lang: string, movieData: MovieById) => {
        const prop = `name${lang}`
        
        if (movieData?.film && prop in movieData.film) {
            return movieData.film[prop]
        } else {
            return movieData?.film?.nameOriginal
        }
    }
    
    const movieName = calculateMovieName(lang, movieData);

    const calculateMovieCountry = (lang: string, movieData: MovieById) => {
        const prop = `countryName${lang}`
        const country = movieData?.film?.countries[0]

        if (country && prop in country) {
            return country[prop]
        } else {
            return country?.countryNameEng
        }
    }
    const movieCountry = calculateMovieCountry(lang, movieData);

    const calculateMovieGenre = (lang: string, movieData: MovieById) => {
        const prop = `genreName${lang}`
        const genre = movieData?.film?.genres[0]

        if (genre && prop in genre) {
            return genre[prop]
        } else {
            return genre?.genreNameEng
        }
    }
    const movieGenre = calculateMovieGenre(lang, movieData);


    

    return {
        movieDuration,
        ageLimit,
        movieYear: movieData?.film?.year,
        movieName,
        movieDescription: movieData?.film?.description,
        movieCountry,
        movieGenre,
        moviePosterUrl: movieData?.film?.posterUrl,
        movieRating: Number(movieData?.film?.ratingKinopoisk),
        similarMovieList: movieData.film.similar
    };
}
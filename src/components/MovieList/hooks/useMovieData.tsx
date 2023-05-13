import DeclensionString from "../../utils/DeclensionString";
import { MovieItemTest } from "../interfaces/interfaces";

export default function useMovieData(movieItem:MovieItemTest) {
    
    const yearRelease = movieItem.year;
    const countries = movieItem.countries.map(country => country.countryNameRu).join(',');
    const genres = movieItem.genres.map(genre => genre.genreNameRu).join(',');

    const infoString = `${yearRelease},${countries},${genres}`;

    const getDurationMovie = (movieItem: MovieItemTest) => {
        //if (movieItem.seasons) {
        //    const seasonsAmount = movieItem.seasons?.length;
        //    return DeclensionString(seasonsAmount, ["сезон", "сезона", "сезонов"]);
        //}
        if (movieItem.filmLength) {
            return DeclensionString(+movieItem.filmLength, ["минута", "минуты", "минут"]);
        }
        return DeclensionString(150, ["минута", "минуты", "минут"]);;
    };
    const durationString = getDurationMovie(movieItem);

    const getRating = (movieItem: MovieItemTest) => {
        if (movieItem.ratingKinopoisk) {
            const rating = movieItem?.ratingKinopoisk.split(".");
            if (rating.length === 1) {
                return [...rating, ",0"];
            }
            rating[1] = "," + rating[1];
            return rating;
        }
        
    };
    const rating = getRating(movieItem) ?? ["5", ",0"];
    

    return { infoString, durationString, rating,countries,genres};
}

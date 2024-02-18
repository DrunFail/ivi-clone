import { useSelector } from "react-redux";
import { SimilarMovie } from "../../../models/types";
import { getLang } from "../../../store/switchLang";
import { calculateMovieName } from "../../../utils/calculateMovieName";

interface UseSimilarItemDataProps {
    similarItem: SimilarMovie
}

export default function useSimilarItemData({ similarItem }: UseSimilarItemDataProps) {
    const lang = useSelector(getLang());

    

    const movieName = calculateMovieName(similarItem, lang)
    const moviePoster = similarItem.posterUrl;
    const movieLink = `/movie/${similarItem.filmId}`;

    return {
        modifiedMovieData: { movieName, moviePoster }, movieLink }
}
import { SimilarMovie } from "../../models/types";
import { calculateMovieName } from "../../utils/calculateMovieName";
import { useLocale } from "next-intl";

interface UseSimilarItemDataProps {
    similarItem: SimilarMovie
}

export default function useSimilarItemData({ similarItem }: UseSimilarItemDataProps) {
    const lang = useLocale();

    

    const movieName = calculateMovieName(similarItem, lang)
    const moviePoster = similarItem.posterUrl;
    const movieLink = `/movie/${similarItem.filmId}`;

    return {
        modifiedMovieData: { movieName, moviePoster }, movieLink }
}
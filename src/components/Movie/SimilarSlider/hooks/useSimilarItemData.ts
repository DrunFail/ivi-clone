import { useSelector } from "react-redux";
import { SimilarMovie } from "../../../../models/types";
import { getLang } from "../../../../store/switchLang";

interface UseSimilarItemDataProps {
    similarItem: SimilarMovie
}

export default function useSimilarItemData({ similarItem }:UseSimilarItemDataProps) {
    const lang = useSelector(getLang());

    const calculateMovieName = (movieItem: {nameRu: string, nameOriginal: string | null}, lang: string) => {
        if (lang.toLowerCase() === "ru") return movieItem.nameRu
        return movieItem.nameOriginal ?? movieItem.nameRu
    }

    const movieName = calculateMovieName(similarItem,lang)
    const posterUrl = similarItem.posterUrl;
    const movieLink = `/movie/${similarItem.filmId}`;

    return {movieName,posterUrl,movieLink}
}
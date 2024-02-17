import { SimilarMovie } from "../../../../models/types"
import useMovieSlider from "../../MovieSlider/hooks/useMovieSlider";

interface UseSimilarSliderProps {
    similarMovieList: SimilarMovie[],
    similarGenreId: number
}
export default function useSimilarSlider({ similarMovieList, similarGenreId }: UseSimilarSliderProps) {
    const isSimilarList = Boolean(similarMovieList.length);

    if (isSimilarList) {
        return { count: similarMovieList.length, rows: similarMovieList,isSimilarList }
    }
    else {
        const movieList = useMovieSlider(similarGenreId)
        return { ...movieList, isSimilarList }
    }

}
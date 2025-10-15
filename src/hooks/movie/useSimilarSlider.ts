import { SimilarMovie } from '../../models/types';
import useMovieSlider from './useMovieSlider';

interface UseSimilarSliderProps {
    similarMovieList: SimilarMovie[];
    similarGenreId: number;
}
export default function useSimilarSlider({ similarMovieList, similarGenreId }: UseSimilarSliderProps) {
    const isSimilarList = Boolean(similarMovieList.length);

    if (isSimilarList) {
        return { count: similarMovieList.length, rows: similarMovieList, isSimilarList };
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const movieList = useMovieSlider(similarGenreId);
        return { ...movieList, isSimilarList };
    }
}

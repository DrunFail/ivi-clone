import Link from "next/link";
import { SimilarMovie } from "../../../models/types"
import MovieListCardWithOverlay from "../MovieListCardWithOverlay/MovieListCardWithOverlay";
import UserOverlayIcon from "../UserOverlayIcon/UserOverlayIcon";
import useSimilarMovieListCardData from "../hooks/useSimilarMovieListCardData"

interface SimilarMovieListCardWithOverlayContainerProps {
    elem: SimilarMovie
}
export default function SimilarMovieListCardWithOverlayContainer({ elem }: SimilarMovieListCardWithOverlayContainerProps) {
    const movieData = useSimilarMovieListCardData({ similarItem: elem });

    return (
        <Link href={movieData.movieLink}>
            <MovieListCardWithOverlay
                icons={<UserOverlayIcon />}
                modifiedMovieData={movieData.modifiedMovieData} />
        </Link>
    );
}
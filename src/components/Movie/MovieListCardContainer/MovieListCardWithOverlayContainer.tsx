import Link from "next/link";
import { Movie } from "../../../models/types";
import MovieListCardWithOverlay from "../MovieListCardWithOverlay/MovieListCardWithOverlay";
import UserOverlayIcon from "../UserOverlayIcon/UserOverlayIcon";
import useMovieListCardData from "../hooks/useMovieListCardData";

interface MovieListCardWithOverlayContainerProps {
    elem: Movie
}

export default function MovieListCardWithOverlayContainer({ elem }: MovieListCardWithOverlayContainerProps) {
    const movieData = useMovieListCardData({ movieData: elem });
    return (
        <Link href={movieData.movieLink}>
            <MovieListCardWithOverlay
                icons={<UserOverlayIcon />}
                modifiedMovieData={movieData.modifiedMovieData}
                overlayMovieData={movieData.overlayMovieData} />
        </Link>
    );
}
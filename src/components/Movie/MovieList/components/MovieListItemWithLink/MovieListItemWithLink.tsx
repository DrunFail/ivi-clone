import Link from "next/link";
import { MovieItemTest } from "../../interfaces/interfaces";
import ButtonDislikeWithHint from "../../UI/ButtonDislikeWithHint/ButtonDislikeWithHint";
import ButtonRateWithHint from "../../UI/ButtonRateWithHint/ButtonRateWithHint";
import ButtonSimilarWithHint from "../../UI/ButtonSimilarWithHint/ButtonSimilarWithHint";
import ButtonWatchLaterWithHint from "../../UI/ButtonWatchLaterWithHint/ButtonWatchLaterWithHint";
import MovieListItem from "../MovieListItem/MovieListItem";
import OverlayMovieListItem from "../OverlayMovieListItem/OverlayMovieListItem";

interface MovieListItemWithLinkProps {
    elem: MovieItemTest,
}
export default function MovieListItemWithLink({ elem }: MovieListItemWithLinkProps) {
    return (
        <Link href={`/movie/${elem.kinopoiskId}`}>
            <MovieListItem movieItem={elem}>
                <OverlayMovieListItem movieItem={elem}>
                    <ButtonWatchLaterWithHint />
                    <ButtonRateWithHint />
                    <ButtonSimilarWithHint />
                    <ButtonDislikeWithHint />
                </OverlayMovieListItem>
            </MovieListItem>
        </Link>
    );
}
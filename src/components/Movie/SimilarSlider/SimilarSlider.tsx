import { SimilarMovie } from "../../../models/types";
import Carousel from "../../UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import MovieListCardWithOverlayContainer from "../MovieListCardContainer/MovieListCardWithOverlayContainer";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { FormattedMessage } from "react-intl";
import SimilarMovieListCardWithOverlayContainer from "../SimilarMovieListCardContainer/SimilarMovieListCardWithOverlayContainer";
import useSimilarSlider from "../hooks/useSimilarSlider";

interface SimilarSliderProps {
    carouselId: string;
    similarMovieList: SimilarMovie[];
    similarGenreId: number,
    movieName: string
}

export default function SimilarSlider({
    carouselId,
    similarMovieList,
    similarGenreId,
    movieName
}: SimilarSliderProps) {
    const data = useSimilarSlider({ similarMovieList, similarGenreId })

    if (!data.rows || !data.count) return <></>

    return (
        <>
            <SectionTitle withArrow={false}>
                <FormattedMessage id="WithFilm" values={{ name: movieName }} />
            </SectionTitle>
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data.rows}
                count={data.rows.length}
                sizes={MOVIE_LIST_SIZES}
                component={data.isSimilarList ? SimilarMovieListCardWithOverlayContainer : MovieListCardWithOverlayContainer}
            />
        </>
    );
}




import { SimilarMovie } from "../../../models/types";
import Carousel from "../../UI/Carousel/Carousel";
import MovieListCardWithOverlayContainer from "../MovieListCardContainer/MovieListCardWithOverlayContainer";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import { FormattedMessage } from "react-intl";
import SimilarMovieListCardWithOverlayContainer from "../SimilarMovieListCardContainer/SimilarMovieListCardWithOverlayContainer";
import useSimilarSlider from "../../../hooks/movie/useSimilarSlider";
import { MOVIE_LIST_SIZES } from "../../../constants/sliderItemSize";

interface SimilarSliderProps {
    similarMovieList: SimilarMovie[];
    similarGenreId: number,
    movieName: string
}

export default function SimilarSlider({
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
                /* eslint-disable */
                //@ts-ignore
                data={data.rows}
                count={data.rows.length}
                sizes={MOVIE_LIST_SIZES}
                /* eslint-disable */
                //@ts-ignore
                component={data.isSimilarList ? SimilarMovieListCardWithOverlayContainer : MovieListCardWithOverlayContainer}
            />
        </>
    );
}




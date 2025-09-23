"use client";

import { Movie, SimilarMovie } from "../../../models/types";
import Carousel from "../../UI/Carousel/Carousel";
import MovieListCardWithOverlayContainer from "../MovieListCardContainer/MovieListCardWithOverlayContainer";
import SimilarMovieListCardWithOverlayContainer from "../SimilarMovieListCardContainer/SimilarMovieListCardWithOverlayContainer";
import { MOVIE_LIST_SIZES } from "../../../constants/sliderItemSize";
import MovieSliderSizeContainer from "../MovieSliderSizeContainer/MovieSliderSizeContainer";

interface SimilarSliderProps {
    similarMovieList: SimilarMovie[];
    similarGenreId: number,
    movieName: string,
    similarData: { count: number, rows: Movie[] | SimilarMovie[], isSimilarList: boolean }
}

export default function SimilarSlider({ similarData }: SimilarSliderProps) {
    return (
        <MovieSliderSizeContainer>
            <Carousel
                mode={"slider"}
                /* eslint-disable */
                //@ts-ignore
                data={similarData.rows}
                count={similarData.count}
                sizes={MOVIE_LIST_SIZES}
                /* eslint-disable */
                //@ts-ignore
                component={similarData.isSimilarList ? SimilarMovieListCardWithOverlayContainer : MovieListCardWithOverlayContainer }
            />
        </MovieSliderSizeContainer>
    );
}




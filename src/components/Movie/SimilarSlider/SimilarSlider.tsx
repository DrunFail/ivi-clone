import { SimilarMovie } from "../../../models/types";
import Carousel from "../../UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import SliderTitle from "../MovieSlider/SliderTitle/SliderTitle";
import SimilatItem from "./components/SimilarItem";
import useSimilarSlider from "./hooks/useSimilarSlider";
import MovieListItemWithLink from "../MovieList/components/MovieListItemWithLink/MovieListItemWithLink";

interface SimilarSliderProps {
    carouselId: string;
    similarMovieList: SimilarMovie[];
    similarGenreId: number,
    href: string;
}

export default function SimilarSlider({
    carouselId,
    similarMovieList,
    href,
    similarGenreId,
}: SimilarSliderProps) {
    const data = useSimilarSlider({ similarMovieList, similarGenreId })

    if (!data.rows || !data.count) return <></>

    return (
        <>
            <SliderTitle
                intlId="WithFilm"
                href={href}
                withArrow={false}
            />
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data.rows}
                count={data.count}
                sizes={MOVIE_LIST_SIZES}
                href={href}
                component={data.isSimilarList ? SimilatItem : MovieListItemWithLink}
            />
        </>
    );
}




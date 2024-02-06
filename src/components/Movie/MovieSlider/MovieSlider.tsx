import SliderTitle from "./SliderTitle/SliderTitle";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import MovieListItemWithLink from "../MovieList/components/MovieListItemWithLink/MovieListItemWithLink";
import Carousel from "../../UI/Carousel/Carousel";
import useMovieSlider from "./hooks/useMovieSlider";


interface MovieSliderProps {
    carouselId: string,
    href: string,
    headingTitle: string,
    genreId: number
}

export default function MovieSlider({ carouselId, href, headingTitle, genreId }: MovieSliderProps) {
    const data = useMovieSlider(genreId);

    if(!data) return <></>

    return (
        <>
            <SliderTitle intlId="genre.comedy" href={href} />
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data.rows}
                count={data.count}
                sizes={MOVIE_LIST_SIZES}
                href={href}
                component={MovieListItemWithLink} />
        </>
    );
}

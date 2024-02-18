import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import Carousel from "../../UI/Carousel/Carousel";
import MovieListCardWithOverlayContainer from "../MovieListCardContainer/MovieListCardWithOverlayContainer";
import { FormattedMessage } from "react-intl";
import SectionTitle from "../../UI/SectionTitle/SectionTitle";
import Link from "next/link";
import useMovieSlider from "../hooks/useMovieSlider";


interface MovieSliderProps {
    carouselId: string,
    href: string,
    genreId: number
}

export default function MovieSlider({ carouselId, href, genreId }: MovieSliderProps) {
    const data = useMovieSlider(genreId);

    if (!data) return <></>

    return (
        <>
            <Link href={href}>
                <SectionTitle withArrow>
                    <FormattedMessage id={`genre.${genreId}.title`} />
                </SectionTitle>
            </Link>
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data.rows}
                count={data.count}
                sizes={MOVIE_LIST_SIZES}
                href={href}
                component={MovieListCardWithOverlayContainer} />
        </>
    );
}

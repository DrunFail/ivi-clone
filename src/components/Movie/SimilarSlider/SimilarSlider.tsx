import { ISimiliar } from "../../../models";
import { SimilarMovie } from "../../../models/types";
import Carousel from "../../UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import SliderTitle from "../MovieSlider/SliderTitle/SliderTitle";
import SimilatItem from "./components/SimilarItem";

interface SimilarSliderProps {
    carouselId: string;
    data: SimilarMovie[];
    count: number;
    href: string;
    headingTitle: string;
}

export default function SimilarSlider({
    carouselId,
    data,
    count,
    href,
    headingTitle
}: SimilarSliderProps) {
    //data.length
    if (data) {
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
                    data={data}
                    count={count}
                    sizes={MOVIE_LIST_SIZES}
                    href={href}
                    component={SimilatItem}
                />
            </>
        );
    }

    return <></>;
}

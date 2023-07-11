import { ISimiliar } from "../../../models";
import Carousel from "../../UI/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import SliderTitle from "../MovieSlider/SliderTitle/SliderTitle";
import SimilatItem from "./components/SimilarItem";

interface SimilarSliderProps {
    carouselId: string;
    data: ISimiliar[];
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
                <SliderTitle title={headingTitle} href={href} />
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

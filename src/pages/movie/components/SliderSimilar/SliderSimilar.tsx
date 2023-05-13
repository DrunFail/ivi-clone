import React from "react";
import { ISimiliar } from "../../../../models";
import SliderTitle from "../../../../components/MovieSlider/SliderTitle/SliderTitle";
import Carousel from "../../../../components/Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../../../../components/MovieList/constants/constants";
import SimilatItem from "./components/SimilarItem";

interface MovieSliderProps {
    carouselId: string;
    data: ISimiliar[];
    count: number;
    href: string;
    headingTitle: string;
}

export default function SliderSimilar({
    carouselId,
    data,
    count,
    href,
    headingTitle
}: MovieSliderProps) {
    if (data.length) {
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

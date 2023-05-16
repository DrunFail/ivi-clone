import React, { useEffect, useState } from "react";
import SliderTitle from "./SliderTitle/SliderTitle";
import { MOVIE_LIST_SIZES } from "../MovieList/constants/constants";
import { MovieItemTest } from "../MovieList/interfaces/interfaces";
import MovieListItemWithLink from "../MovieList/components/MovieListItemWithLink/MovieListItemWithLink";
import Carousel from "../../Carousel/Carousel";

interface TestData {
    count: number,
    rows: MovieItemTest[]
}

interface MovieSliderProps {
    carouselId: string,
    href: string,
    headingTitle: string,
    genreId: number
}

export default function MovieSlider({ carouselId, href, headingTitle, genreId }: MovieSliderProps) {
    const [data, setData] = useState<TestData>();

    useEffect(() => {
        fetch(`http://localhost:5000/api/movies/filters?genreId=${genreId}`)
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    if(!data) return <></>

    return (
        <>
            <SliderTitle title={headingTitle} href={href} />
            <Carousel
                mode={"slider"}
                carouselId={carouselId}
                data={data?.rows}
                count={data?.count}
                sizes={MOVIE_LIST_SIZES}
                href={href}
                component={MovieListItemWithLink} />
        </>
    );
}

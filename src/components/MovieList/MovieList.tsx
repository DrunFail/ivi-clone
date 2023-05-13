import styles from "./MovieList.module.scss";
import React from "react";
import Carousel from "../Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "./constants/constants";
import { MovieItemTest } from "./interfaces/interfaces";
import MovieListItemWithLink from "./components/MovieListItemWithLink/MovieListItemWithLink";

interface MovieListProps {
    data: MovieItemTest[]
}

export default function MovieList({data }:MovieListProps) {
    return (
        <div className={styles.container}>
            <Carousel
                component={MovieListItemWithLink}
                mode={"list"}
                carouselId={"qwe"}
                data={data}
                count={50}
                sizes={MOVIE_LIST_SIZES}
            />
        </div>
    );
}

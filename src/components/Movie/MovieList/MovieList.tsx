import styles from "./MovieList.module.scss";
import { MOVIE_LIST_SIZES } from "./constants/constants";
import Carousel from "../../UI/Carousel/Carousel";
import { Movie } from "../../../models/types";
import MovieListCardWithOverlayContainer from "../MovieListCardContainer/MovieListCardWithOverlayContainer";

interface MovieListProps {
    data: Movie[],
    showMoreHandler?: () => void
}

export default function MovieList({data,showMoreHandler }:MovieListProps) {
    return (
        <div className={styles.container}>
            <Carousel
                component={MovieListCardWithOverlayContainer}
                mode={"list"}
                carouselId={"qwe"}
                data={data}
                count={50}
                sizes={MOVIE_LIST_SIZES}
                showMoreHandler={showMoreHandler }
            />
        </div>
    );
}

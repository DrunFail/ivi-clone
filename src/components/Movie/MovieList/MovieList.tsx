import styles from "./MovieList.module.scss";
import { MOVIE_LIST_SIZES } from "./constants/constants";
import MovieListItemWithLink from "./components/MovieListItemWithLink/MovieListItemWithLink";
import Carousel from "../../UI/Carousel/Carousel";
import { Movie } from "../../../models/types";

interface MovieListProps {
    data: Movie[],
    showMoreHandler?: () => void
}

export default function MovieList({data,showMoreHandler }:MovieListProps) {
    return (
        <div className={styles.container}>
            <Carousel
                component={MovieListItemWithLink}
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

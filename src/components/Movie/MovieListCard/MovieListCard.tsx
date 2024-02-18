import AgeRestriction from "../MovieList/UI/AgeRestrictionOverlay/AgeRestriction";
import MovieListCardMovieName from "../MovieListCardMovieName/MovieListCardMovieName";
import styles from "./MovieListCard.module.scss";
import Image from "next/image";

interface MovieListCardProps {
    modifiedMovieData: {
        movieName: string,
        moviePoster: string,
    },
    children?: React.ReactNode
}

export default function MovieListCard({modifiedMovieData, children}:MovieListCardProps) {

    return (
        <div className={styles.item}>
            <div className={styles.image_container}>
                <Image src={modifiedMovieData.moviePoster} alt='' fill sizes="(max-width: 768px) 100vw" />
                <div className={styles.restriction}>
                    <AgeRestriction />
                </div>
                {children}
            </div>
            <MovieListCardMovieName movieName= {modifiedMovieData.movieName} />
        </div>
    );
}
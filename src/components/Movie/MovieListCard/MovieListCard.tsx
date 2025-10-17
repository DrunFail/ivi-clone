import { defaultBlur } from '../../../utils/blurDataUrl';
import AgeRestriction from '../../UI/movie/AgeRestriction/AgeRestriction';
import MovieListCardMovieName from '../../UI/movie/MovieListCardMovieName/MovieListCardMovieName';
import styles from './MovieListCard.module.scss';
import Image from 'next/image';

interface MovieListCardProps {
    modifiedMovieData: {
        movieName: string;
        moviePoster: string;
    };
    children?: React.ReactNode;
}

export default function MovieListCard({ modifiedMovieData, children }: MovieListCardProps) {
    return (
        <figure className={styles.item}>
            <div className={styles.image_container}>
                <Image
                    src={modifiedMovieData.moviePoster}
                    alt=""
                    fill
                    placeholder="blur"
                    blurDataURL={defaultBlur}
                    quality={75}
                />
                <div className={styles.restriction}>
                    <AgeRestriction />
                </div>
                {children}
            </div>
            <figcaption>
                <MovieListCardMovieName movieName={modifiedMovieData.movieName} />
            </figcaption>
        </figure>
    );
}

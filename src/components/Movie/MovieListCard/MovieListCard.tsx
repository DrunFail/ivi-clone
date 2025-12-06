import AgeRestriction from '../../UI/movie/AgeRestriction/AgeRestriction';
import MovieListCardMovieName from '../../UI/movie/MovieListCardMovieName/MovieListCardMovieName';
import styles from './MovieListCard.module.scss';
import MoviePoster from '@/components/Movie/MoviePoster/MoviePoster';
import { useTranslations } from 'next-intl';

interface MovieListCardProps {
    modifiedMovieData: {
        movieName: string;
        moviePoster: string;
    };
    children?: React.ReactNode;
}

export default function MovieListCard({ modifiedMovieData, children }: MovieListCardProps) {
    const t = useTranslations('image');
    return (
        <figure className={styles.item}>
            <div className={styles.image_container}>
                <MoviePoster
                    posterUrl={modifiedMovieData.moviePoster}
                    alt={t('movie', { movieName: modifiedMovieData.movieName })}
                    sizes={`
                    (max-width: 319px) calc((1000vw - 76px) / 2),
                    (min-width: 320px) calc((100vw - 76px) / 2),
                    (min-width: 400px) calc((100vw - 96px) / 3),
                    (min-width: 510px) calc((100vw - 116px) / 4),
                    (min-width: 600px) calc((100vw - 96px) / 3),
                    (min-width: 745px) calc((100vw - 116px) / 4),
                    (min-width: 920px) calc((100vw - 136px) / 5),
                    (min-width: 1100px) calc((100vw - 156px) / 6),
                        ( min-width: 1216px) 161px),
                        `}
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

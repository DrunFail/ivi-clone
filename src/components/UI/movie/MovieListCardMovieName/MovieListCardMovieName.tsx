import styles from './MovieListCardMovieName.module.scss';

interface MovieListCardMovieNameProps {
    movieName: string;
}
export default function MovieListCardMovieName({ movieName }: MovieListCardMovieNameProps) {
    return <span className={styles.text}>{movieName}</span>;
}

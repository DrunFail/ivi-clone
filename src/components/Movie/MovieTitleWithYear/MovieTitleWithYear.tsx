import styles from './MovieTitleWithYear.module.scss';

interface MovieTitleWithYearProps {
    movieTitle: string;
    movieYear: number;
}
export default function MovieTitleWithYear({ movieTitle, movieYear }: MovieTitleWithYearProps) {
    return (
        <>
            <h1 className={styles.title}>
                {movieTitle} (Фильм {movieYear})
            </h1>
        </>
    );
}

"use client";

import MovieTitleWithYear from "../../MovieTitleWithYear/MovieTitleWithYear";
import styles from "./Info.module.scss";
import { useTranslations } from "next-intl";

interface InfoProps {
    movieTitle: string,
    movieYear: number,
    ageLimit: string,
    movieDuration: { hours: number, minutes: number },
    movieCountry: string,
    movieGenre: string

}
export default function Info({ movieTitle, movieYear, ageLimit, movieDuration, movieCountry, movieGenre }: InfoProps) {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <MovieTitleWithYear
                movieTitle={movieTitle}
                movieYear={movieYear} />

            <div className={styles.info_container }>
                <div className={styles.top}>
                    <span>{movieYear}</span>
                    <span>
                        {movieDuration.hours}
                        {" "}
                        {t("hour")}
                        {movieDuration.minutes}
                        {" "}
                        {t("minute")}
                    </span>
                    <span>{ageLimit}+</span>
                </div>
                <div className={styles.bottom}>
                    <span>{movieCountry}</span>
                    <span>{movieGenre}</span>
                </div>
            </div>
        </div>
    );
};

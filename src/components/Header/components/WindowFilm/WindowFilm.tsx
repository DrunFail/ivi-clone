import styles from "./WindowFilm.module.scss";
import React from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import Link from "next/link";
import { getGenresList } from "../../../../store/genres";
import { getLang } from "../../../../store/switchLang";
import { getCountriesList } from "../../../../store/countries";
import { upperCase } from "../../../../utils/UpperCase";

type TWindowFilm = {
    id: number;
    name: string;
};

interface WindowFilmProps {
    zhanr: TWindowFilm[];
    zhanr2: TWindowFilm[];
    country: TWindowFilm[];
    year: TWindowFilm[];
}

export default function WindowFilm({ zhanr, country, year }: WindowFilmProps){
    const genre = useSelector(getGenresList());
    const lang = useSelector(getLang());
    const countries = useSelector(getCountriesList());

    return (
        <div className={styles.WindowFilm}>
            <div className={styles.WindowFilm__zhanr}>
                <div>
                    <h3 className={styles.WindowFilm__h4}>
                        <FormattedMessage id="Genres" />
                    </h3>
                    {genre?.slice(0, 10).map((gen) => (
                        <Link href={`/movies/${gen.genreNameEng}`}>
                            <p className={styles.WindowFilm__p} key={gen.id}>
                                {lang === "En" && gen.genreNameEng
                                    ? upperCase(gen.genreNameEng)
                                    : upperCase(gen.genreNameRu)}
                            </p>
                        </Link>
                    ))}
                </div>
                <div>
                    <h3 className={styles.WindowFilm__h4}>&nbsp;</h3>
                    {genre?.slice(10, 20).map((gen) => (
                        <Link href={`/movies/${gen.genreNameEng}`}>
                            <p className={styles.WindowFilm__p} key={gen.id}>
                                {lang === "En" && gen.genreNameEng
                                    ? upperCase(gen.genreNameEng)
                                    : upperCase(gen.genreNameRu)}
                            </p>
                        </Link>
                    ))}
                </div>
            </div>
            <div className={styles.WindowFilm__country}>
                <div>
                    <h3 className={styles.WindowFilm__h4}>
                        <FormattedMessage id="Country" />
                    </h3>
                    {countries
                        ?.slice(0, 4)
                        .map(({ id, countryNameEng, countryNameRu }) => (
                            <Link href={`/movies/${countryNameEng}`}>
                                <p className={styles.WindowFilm__p} key={id}>
                                    {lang === "En" && countryNameEng
                                        ? upperCase(countryNameEng)
                                        : upperCase(countryNameRu)}
                                </p>
                            </Link>
                        ))}
                </div>
                <div>
                    <h3 className={styles.WindowFilm__h4}>
                        <FormattedMessage id="Year" />
                    </h3>
                    {year?.map((key) => (
                        <Link href={`/movies/${key.name}`}>
                            <div className={styles.WindowFilm__p} key={key.id}>
                                {key.name}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
};


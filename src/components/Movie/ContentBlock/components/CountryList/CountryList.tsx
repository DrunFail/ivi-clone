import { useSelector } from "react-redux";
import React from "react";
import styles from '../../../../../pages/movie/movies.module.scss';
import { getFilm } from "../../../../../store/film";
import { getLang } from "../../../../../store/switchLang";

const CountryList = () => {
    const films = useSelector(getFilm());
    const lang = useSelector(getLang());

    return (
        <div className={styles.Movie__country}>
            {films?.currentFilm?.countries?.map((country) => (
                <p>{country.countryNameRu} •</p>
            ))}
            {films?.currentFilm?.genre?.map((genre) => (
                <p key={genre.id}>
                    {lang !== "Ru" && genre.genreNameEng !== null
                        ? genre.genreNameRu[0].toUpperCase() +
                          genre.genreNameRu.slice(1)
                        : genre?.genreNameEng}{" "}
                </p>
            ))}
        </div>
    );
};

export default CountryList;

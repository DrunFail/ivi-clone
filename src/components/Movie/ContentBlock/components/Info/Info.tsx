import React from "react";
import { useSelector } from "react-redux";
import { IService } from "../../../../../models/IServise";
import styles from '../../../../../pages/movie/movies.module.scss';
import { getFilm } from "../../../../../store/film";
import { getLang } from "../../../../../store/switchLang";
import { minHours } from "../../../../../utils/minHours";

const Info = () => {
    const lang = useSelector(getLang());
    const films = useSelector(getFilm());
    const minHour: IService = React.useMemo<IService>((): IService => {
        return minHours(Number(films?.film?.filmLength || 0));
    }, [films]);

    return (
        <>
            <h1>
                {lang !== "Ru" && films?.film?.nameOriginal
                    ? films?.film?.nameOriginal
                    : films?.film?.nameRu}
            </h1>
            <div className={styles.Movie__year}>
                <p>{films?.film?.year} •</p>
                <p>{lang === "Ru" ? minHour.ru : minHour.en} •</p>
                <p>
                    {films?.film?.ratingAgeLimits?.replace("age", "")}+
                </p>
            </div>
        </>
    );
};

export default Info;

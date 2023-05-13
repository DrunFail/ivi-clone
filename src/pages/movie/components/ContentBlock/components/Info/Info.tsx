import React from "react";
import { useSelector } from "react-redux";
import { getLang } from "../../../../../../store/switchLang";
import { getFilm } from "../../../../../../store/film";
import { IService } from "../../../../models/IServise";
import { minHours } from "../../../../services/minHours";
import styles from "../../../../movies.module.scss";

const Info = () => {
    const lang = useSelector(getLang());
    const films = useSelector(getFilm());
    const minHour: IService = React.useMemo<IService>((): IService => {
        return minHours(Number(films?.currentFilm?.filmLength || 0));
    }, [films]);

    return (
        <>
            <h1>
                {lang !== "Ru" && films?.currentFilm?.nameOriginal
                    ? films?.currentFilm?.nameOriginal
                    : films?.currentFilm?.nameRu}
            </h1>
            <div className={styles.Movie__year}>
                <p>{films?.currentFilm?.year} •</p>
                <p>{lang === "Ru" ? minHour.ru : minHour.en} •</p>
                <p>
                    {films?.currentFilm?.ratingAgeLimits?.replace("age", "")}+
                </p>
            </div>
        </>
    );
};

export default Info;

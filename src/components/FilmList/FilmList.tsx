import { useSelector } from "react-redux";
import Film from "../Film/Film";
import React, { Fragment } from "react";
import styles from "../../pages/person/person.module.scss";
import { getPerson } from "../../store/person";

const FilmList = () => {
    const person = useSelector(getPerson());
    return (
        <div className={styles.Person__filmsList}>
            {person?.films?.map((film) => (
                <Fragment key={film[0].id}>
                    <Film film={film} />
                </Fragment>
            ))}
        </div>
    );
};

export default FilmList;

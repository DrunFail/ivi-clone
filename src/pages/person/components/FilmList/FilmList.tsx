import { useSelector } from "react-redux";
import Film from "../Film/Film";
import React, { Fragment } from "react";
import { getPerson } from "../../../../store/person";
import styles from "../../person.module.scss";

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

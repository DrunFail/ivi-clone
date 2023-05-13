import { FormattedMessage } from "react-intl";
import ToggleMovie from "../ToggleMovie/ToggleMovie";
import styles from '../../../../pages/movie/movies.module.scss';
import { useSelector } from "react-redux";
import React from "react";
import { getFilm } from "../../../../store/film";

const Description = () => {
    const films = useSelector(getFilm());

    return (
        <div className={styles.Movie__description}>
            <ToggleMovie
                nameEnd={<FormattedMessage id="ToggleMovieHide" />}
                nameStart={<FormattedMessage id="ToggleMovieShow" />}
            >
                <p className={styles.text}>{films?.currentFilm?.description}</p>
                <div>
                    <div className={styles.Description__lang}>
                        <h4>
                            <FormattedMessage id="Slogan" />
                        </h4>
                        <h4>{films?.currentFilm?.slogan}</h4>
                    </div>
                </div>
            </ToggleMovie>
        </div>
    );
};

export default Description;

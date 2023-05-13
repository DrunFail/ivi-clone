import { FormattedMessage } from "react-intl";
import React from "react";
import styles from "../../Layout.module.scss";

const DefaultWindow = () => {
    return (
        <>
            <p className={styles.SearchWindow__p}>
                <FormattedMessage id="PremierFilm" />
            </p>
            <p className={styles.SearchWindow__p}>
                <FormattedMessage id="NewSubscriptions" />
            </p>
            <p className={styles.SearchWindow__p}>
                <FormattedMessage id="SerialsAmediateka" />
            </p>
            <p className={styles.SearchWindow__p}>
                <FormattedMessage id="HighRating" />
            </p>
        </>
    );
};

export default DefaultWindow;

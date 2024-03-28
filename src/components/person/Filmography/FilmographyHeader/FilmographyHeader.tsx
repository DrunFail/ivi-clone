import { FormattedMessage } from "react-intl";
import styles from "./FilmographyHeader.module.scss";

export default function FilmographyHeader({ personMovieAmount }: {personMovieAmount:number}){

    return (
        <h3 className={styles.text }>
            <FormattedMessage id="FullFilmography" />{" "}
            <sup>
                {personMovieAmount} <FormattedMessage id="Films" />
            </sup>
        </h3>
    );
};



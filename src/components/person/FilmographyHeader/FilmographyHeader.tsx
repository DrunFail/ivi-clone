import { FormattedMessage } from "react-intl";
import styles from "./FilmographyHeader.module.scss";

export default function FilmographyHeader({ personMovieAmount }: {personMovieAmount:number}){

    return (
        <h2 className={styles.text }>
            <FormattedMessage id="FullFilmography" />{" "}
            <span>
                {personMovieAmount} <FormattedMessage id="Films" />
            </span>
        </h2>
    );
};



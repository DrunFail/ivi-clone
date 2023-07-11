import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { getPerson } from "../../../store/person";
import styles from "./FilmographyHeader.module.scss";

export default function FilmographyHeader({ personMovieAmount }: {personMovieAmount:number}){
    const person = useSelector(getPerson());

    return (
        <h2 className={styles.text }>
            <FormattedMessage id="FullFilmography" />{" "}
            <span>
                {personMovieAmount} <FormattedMessage id="Films" />
            </span>
        </h2>
    );
};



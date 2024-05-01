import styles from "./FilmographyHeader.module.scss";

interface FilmographyHeaderProps {
    personMovieAmount: number;
    headerTitle: string;
    amountTitle: string;
}

export default function FilmographyHeader({ personMovieAmount,headerTitle,amountTitle }:FilmographyHeaderProps){

    return (
        <h3 className={styles.text }>
            {headerTitle}
            {" "}
            <sup>
                {personMovieAmount}
                {" "}
                {amountTitle}
            </sup>
        </h3>
    );
};



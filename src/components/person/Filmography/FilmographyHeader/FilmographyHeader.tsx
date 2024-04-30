import styles from "./FilmographyHeader.module.scss";

export default function FilmographyHeader({ personMovieAmount }: {personMovieAmount:number}){

    return (
        <h3 className={styles.text }>
            Полная фильмография{" "}
            <sup>
                {personMovieAmount} фильмов
            </sup>
        </h3>
    );
};



import ShareButtonWithModal from "../../Share/ShareButtonWithModal";
import ButtonTrailer from "../../UI/ButtonTrailer/ButtonTrailer";
import ButtonWatchLater from "../../UI/ButtonWatchLater/ButtonWatchLater";
import styles from "./ButtonPlayerBlock.module.scss";

interface ButtonPlayerBlockProps {
    moviePosterUrl: string;
    movieName: string;
    movieYear: number;
    variant: "desktop" | "tablet" | "mobile"
}
export default function ButtonPlayerBlock({ moviePosterUrl, movieName, movieYear, variant }: ButtonPlayerBlockProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses}>
            <ButtonTrailer />
            <ButtonWatchLater />
            <ShareButtonWithModal
                posterUrl={moviePosterUrl}
                nameRu={movieName}
                year={movieYear} />
        </div>
    
    );

}
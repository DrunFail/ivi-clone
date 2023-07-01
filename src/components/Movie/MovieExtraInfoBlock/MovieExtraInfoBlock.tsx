import HorizontalLine from "../../UI/HorizontalLine/HorizontalLine";
import LanguageMovieInfo from "../moviePageComponents/LanguageMovieInfo/LanguageMovieInfo";
import VideoMovieInfo from "../moviePageComponents/VideoMovieInfo/VideoMovieInfo";
import styles from "./MovieExtraInfoBlock.module.scss";

interface MovieExtraInfoBlockProps {
    variant: "desktop" | "tablet"
}
export default function MovieExtraInfoBlock({ variant }: MovieExtraInfoBlockProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `
    return (
        <div className={defaultClasses}>
            <LanguageMovieInfo variant={variant} />
            {variant === "tablet" && <HorizontalLine /> }
            <VideoMovieInfo variant={variant} />
        </div>
    );
}
import styles from "./LanguageMovieInfo.module.scss";

interface LanguageMovieInfoProps {
    variant: "desktop" | "tablet"
}
export default function LanguageMovieInfo({ variant }: LanguageMovieInfoProps) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses}>
            <p>Языки</p>
        <p>Русский</p>
        </div>
    );
}
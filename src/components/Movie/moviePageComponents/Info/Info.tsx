import { FormattedMessage } from "react-intl";
import styles from "./Info.module.scss";

interface InfoProps {
    movieTitle: string,
    movieYear: number,
    ageLimit: string,
    movieDuration: { hours: number, minutes: number },
    movieCountry: string,
    movieGenre: string

}
export default function Info({ movieTitle, movieYear, ageLimit, movieDuration, movieCountry, movieGenre }: InfoProps) {
    return (
        <div className={styles.container}>
            <div className={styles.heading }>
            <h1>{movieTitle}</h1>
                <h1>(Фильм {movieYear})</h1>
            </div>
            <div className={styles.info_container }>
                <div className={styles.top}>
                    <p>{movieYear}</p>
                    <p>{movieDuration.hours}{" "}<FormattedMessage id="hour" />{movieDuration.minutes}{" "}<FormattedMessage id="minute" /></p>
                    <p>{ageLimit}+</p>
                </div>
                <div className={styles.bottom}>
                    <p>{movieCountry}</p>
                    <p>{movieGenre}</p>
                </div>
            </div>
        </div>
    );
};

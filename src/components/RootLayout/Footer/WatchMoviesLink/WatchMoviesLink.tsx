import { FormattedMessage } from "react-intl";
import styles from "./WatchMoviesLink.module.scss";
import MegaphoneImage from "../../../UI/MegaphoneImage/MegaphoneImage";

export default function WatchMoviesLink() {
    return (
        <div className={styles.container} data-testid="watch-movies-link">
            <MegaphoneImage />
            <p><FormattedMessage id="WatchMovies" /></p>
        </div>
    );
}
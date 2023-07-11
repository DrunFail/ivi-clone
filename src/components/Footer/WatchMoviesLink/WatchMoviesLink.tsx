import { FormattedMessage } from "react-intl";
import MegaphoneImage from "../../UI/MegaphoneImage/MegaphoneImage";
import styles from "./WatchMoviesLink.module.scss";

export default function WatchMoviesLink() {
    return (
        <div className={styles.container}>
            <MegaphoneImage />
            <p><FormattedMessage id="WatchMovies" /></p>
        </div>
    );
}
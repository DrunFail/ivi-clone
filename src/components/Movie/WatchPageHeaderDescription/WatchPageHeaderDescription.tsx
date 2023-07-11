import { FormattedMessage } from "react-intl";
import styles from "./WatchPageHeaderDescription.module.scss";

export default function WatchPageHeaderDescription({ currentGenre }: {currentGenre: string}) {
    return (
        <>
            <h1 className={styles.title}><FormattedMessage id={`genre.${currentGenre}.title`} /></h1>
            <div className={styles.pageDescription}>
                <FormattedMessage id={`genre.${currentGenre}.description`} />
            </div>
            </>
            );
        
}
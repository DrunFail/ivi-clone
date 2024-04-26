import styles from "./NotFoundErrorPage.module.scss";
import { FormattedMessage } from "react-intl";

export default function NotFoundErrorPage() {
    return (
        <div className={styles.Back}>
            <div>
                <h1>
                    <FormattedMessage id="Error" />
                </h1>
                <p>
                    <FormattedMessage id="TheRequested" />
                </p>
            </div>
        </div>
    );
}
import { FormattedMessage } from "react-intl";
import styles from "./AskIvi.module.scss";

export default function AskIvi() {
    return (
        <div className={styles.container }>
            <h4>ask.ivi</h4>
            <p>
                <FormattedMessage id="AnswersOnQuestions" />
            </p>
        </div>
    );
}
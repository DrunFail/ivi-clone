import { FormattedMessage } from "react-intl";
import styles from "./AskIvi.module.scss";

export default function AskIvi() {
    return (
        <div className={styles.container } data-testid="ask-ivi">
            <h3>ask.ivi</h3>
            <p>
                <FormattedMessage id="AnswersOnQuestions" />
            </p>
        </div>
    );
}
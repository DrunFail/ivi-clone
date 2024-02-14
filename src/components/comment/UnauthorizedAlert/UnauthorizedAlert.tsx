import styles from "./UnauthorizedAlert.module.scss";
import LoginButton from "../../UI/LoginButton/LoginButton";
import { FormattedMessage } from "react-intl";

export default function UnauthorizedAlert() {
    return (
        <div className={styles.alert}>
            <div className={styles.text }>
                <FormattedMessage id="comment.unauthorized"/>
            </div>
            
            <LoginButton />

        </div>
    );
}
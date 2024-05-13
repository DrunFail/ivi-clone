"use client";

import MemoizedFormattedMessage from "react-intl/src/components/message";
import Button from "../../UI/core/Button/Button";
import styles from "./UnauthorizedAlert.module.scss";
import { FormattedMessage } from "react-intl";

export default function UnauthorizedAlert() {
    return (
        <div className={styles.alert}>
            <div className={styles.text }>
                <FormattedMessage id="comment.unauthorized"/>
            </div>
            
            <Button
                as="link"
                color="red"
                href="/auth/login"
            >
                <MemoizedFormattedMessage id="EnterOrRegister" />
            </Button>

        </div>
    );
}
import { HTMLAttributes, useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./ButtonWithHint.module.scss";

interface ButtonWithHintProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    description: string,
    actionHandler?: () => void
}

export default function ButtonWithHint({children,actionHandler, description, ...props }:ButtonWithHintProps) {
    const [visible, setVisible] = useState(false);

    return (
        <button
            className={styles.button}
            onClick={actionHandler}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            {...props }
        >
            {children }
            {visible && <p><FormattedMessage id={description} /></p> }
        </button>

    );
}

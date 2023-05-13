import React, { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./ButtonActionOverlay.module.scss";

interface ButtonActionOverlayProps {
    children: React.ReactNode,
    description: string | React.ReactNode,
    actionHandler?: () => void
}

export default function ButtonActionOverlay({children,actionHandler, description }:ButtonActionOverlayProps) {
    const [visible, setVisible] = useState(false);

    return (
        <button
            className={styles.button}
            onClick={actionHandler}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}>
            {children }
            {visible && <p>{description}</p> }
        </button>

    );
}

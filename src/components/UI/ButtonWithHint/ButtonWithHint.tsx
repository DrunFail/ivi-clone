"use client";

import { HTMLAttributes, useState } from "react";
import styles from "./ButtonWithHint.module.scss";
import { useTranslations } from "next-intl";

interface ButtonWithHintProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    description: string,
    actionHandler?: () => void
}

export default function ButtonWithHint({children,actionHandler, description, ...props }:ButtonWithHintProps) {
    const [visible, setVisible] = useState(false);
    const t = useTranslations();

    return (
        <button
            className={styles.button}
            onClick={actionHandler}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            {...props }
        >
            {children }
            {visible && <span>{t(description)}</span> }
        </button>

    );
}

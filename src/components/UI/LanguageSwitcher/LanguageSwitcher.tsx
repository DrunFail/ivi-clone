"use client";

import { useState } from "react";
import styles from "./LanguageSwitcher.module.scss";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";

const LocaleVariantMenu = dynamic(() => import("./LocaleVariantMenu/LocaleVariantMenu"));

interface LanguageSwitcherProps {
    button: React.ReactNode
}

export default function LanguageSwitcher({ button }: LanguageSwitcherProps) {
    const [visible, setVisible] = useState<boolean>();
    const path = usePathname();
    const pathWithoutLocale = `/${path.slice(4)}`;

    const hoverVisible = (bol: boolean) => {
        setVisible(bol);
    };

    return (
        <div
            className={styles.container}
            onMouseOver={() => hoverVisible(true)}
            onMouseOut={() => hoverVisible(false)}
            onClick={() => hoverVisible(!visible)}
            data-testid="lng-switcher"
        >
            {button}
            {visible &&
                <LocaleVariantMenu
                    pathWithoutLocale={pathWithoutLocale}
                />
            }
        </div>
    );
};

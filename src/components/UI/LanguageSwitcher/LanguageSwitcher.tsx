"use client";

import { useState } from "react";
import styles from "./LanguageSwitcher.module.scss";
import { usePathname } from "next/navigation";
import { Link } from "../../../navigation";
import { useLocale } from 'next-intl';

const LOCALE = {
    ru: "RU",
    en: "EN"
}


export default function SwitchButton() {
    const [visible, setVisible] = useState<boolean>();
    const path = usePathname();
    const locale = useLocale();
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
            <span className={styles.currentLocale}>{LOCALE[locale as keyof typeof LOCALE]}</span>
            {visible &&
                <div className={styles.localeVariant}>
                    <Link href={pathWithoutLocale} locale="ru">RU</Link>
                    <Link href={pathWithoutLocale} locale="en">EN</Link>
                </div>
            }
        </div>
    );
};

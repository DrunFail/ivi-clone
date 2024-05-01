import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageSwitcher.module.scss";
import { getLang, langAction } from "../../../store/slices/switchLang";
import { useRouter, usePathname } from "next/navigation";

const SwitchButton = () => {
    const [visible, setVisible] = useState<boolean>();
    const lang = useSelector(getLang());
    const dispatch = useDispatch();
    const router = useRouter();
    const path = usePathname();
    const newPath = (locale:"en" | "ru") => `/${locale}/` + path.slice(4);
    

    const switchLang = (langType: string) => {
        dispatch(langAction(langType));
    };

    const hoverVisible = (bol: boolean) => {
        setVisible(bol);
    };

    return (
        <>
            <div
                onMouseOver={() => hoverVisible(true)}
                onMouseOut={() => hoverVisible(false)}
                onClick={() => hoverVisible(!visible)}
                className={styles.container}
                data-testid="lng-switcher"
            >
                <span className={styles.SwitchButton__text}>{lang}</span>
                {visible ? (
                    <div className={styles.switcher_btn}>
                        <button onClick={() => { switchLang("Ru"); router.push(newPath("ru")); document.cookie = "locale=ru;path=/;" } }>
                            RU
                        </button>
                        
                        <button onClick={() => { switchLang("En"); router.push(newPath("en")); document.cookie = "locale=en;path=/;" }}>
                            EN
                        </button>
                    </div>
                ) : (
                    ""
                )}
            </div>
        </>
    );
};

export default SwitchButton;

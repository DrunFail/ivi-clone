import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./LanguageSwitcher.module.scss";
import { getLang, langAction } from "../../../store/slices/switchLang";

const SwitchButton = () => {
    const [visible, setVisible] = useState<boolean>();
    const lang = useSelector(getLang());
    const dispatch = useDispatch();

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
                        <button onClick={() => switchLang("Ru")}>
                            RU
                        </button>
                        <button onClick={() => switchLang("En")}>
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

import styles from "./MainAdvantageOverlay.module.scss";
import React from "react";
import Progressbar from "../Progressbar/Progressbar";

export default function MainAdvantage() {
    return (
        <div className={styles.advantage }>
            <p>сюжет</p>
            <Progressbar size={4} value={4} />
        </div>

    );
}

import React from "react";
import styles from "./HeaderTitleTop.module.scss";
import Image from "next/image";

export default function HeaderTitleTop() {
    return (
        <div className={styles.header}>
            <Image src="/top10.svg" width={116} height={28} alt='top 10' />
            за неделю

        </div>
    );
}

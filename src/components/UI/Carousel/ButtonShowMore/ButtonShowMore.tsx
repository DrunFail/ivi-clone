import React, { HTMLAttributes } from "react";
import styles from "./ButtonShowMore.module.scss";

interface ButtonShowMoreProps extends HTMLAttributes<HTMLButtonElement> {

}

export default function ButtonShowMore({...props }:ButtonShowMoreProps) {
    return (
        <button
            className={styles.button}
            type='button'
            {...props }
        >
            Показать еще
        </button>
    );
}

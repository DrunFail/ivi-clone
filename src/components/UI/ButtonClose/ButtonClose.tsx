import { HTMLAttributes } from "react";
import styles from "./ButtonClose.module.scss";

interface ButtonCloseProps extends HTMLAttributes<HTMLButtonElement> {

}
export default function ButtonClose({...props}:ButtonCloseProps) {
    return (
        <button
            className={styles.button}
            type='button'
            {...props }
        >&#215;</button>
    );
}

import { HTMLAttributes } from "react";
import styles from "./FilterInput.module.scss";

interface FilterInputProps extends HTMLAttributes<HTMLInputElement> {
    value: string
}
export default function FilterInput({value,...props }:FilterInputProps) {
    return (
        <input
            className={styles.input}
            type="text"
            autoComplete="off"
            value={value }
            {...props }
            />
    );
}
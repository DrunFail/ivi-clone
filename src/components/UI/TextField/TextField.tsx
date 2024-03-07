import { HTMLAttributes } from "react";
import styles from "./TextField.module.scss";

interface TextFieldRequired {
    id?: string,
    name?: string,
    value?: string,
    required?: boolean
}

export interface TextFieldProps extends Omit<HTMLAttributes<HTMLInputElement>, keyof TextFieldRequired>, TextFieldRequired { }
export default function TextField({ ...props }: TextFieldProps) {
    return (
        <input
            type="text"
            className={styles.textField}
            {...props}
        />
    );
}
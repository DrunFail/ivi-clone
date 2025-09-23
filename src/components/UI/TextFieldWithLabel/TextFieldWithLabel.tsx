import styles from "./TextFieldWithLabel.module.scss";
import TextField, { TextFieldProps } from "../TextField/TextField";

interface TextFieldWithLabelProps extends TextFieldProps {
    labelText?:React.ReactNode
}
export default function TextFieldWithLabel({labelText,...props }:TextFieldWithLabelProps) {
    return (
        <div className={styles.container}>
            <TextField
                id={props.id}
                required
                {...props}
            />
            <label
                htmlFor={props.id}
                className={styles.placeholder}
            >
                {labelText}
            </label>
        </div>
    );
}
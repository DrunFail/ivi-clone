import styles from "./ButtonFormAuthSubmit.module.scss";

interface ButtonFormAuthSubmitProps extends React.HTMLAttributes<HTMLButtonElement> {
    disabled?: boolean,
    type?: "submit" | "button" | "reset",
    text:string
}

export default function ButtonFormAuthSubmit({ disabled, text, type = "button", ...props }:ButtonFormAuthSubmitProps){
    return (
        <button type={type} disabled={disabled} {...props} className={styles.button}>{text}</button>
    );
};

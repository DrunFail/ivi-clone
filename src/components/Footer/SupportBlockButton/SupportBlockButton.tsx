import ButtonCall from "../../UI/ButtonCall/ButtonCall";
import ButtonChat from "../../UI/ButtonChat/ButtonChat";
import ButtonMail from "../../UI/ButtonMail/ButtonMail";
import styles from "./SupportBlockButton.module.scss";
export default function SupportBlockButton({ variant }: {variant: "desktop" | "tablet" | "mobile"}) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses} data-testid="btns-support-block">
            <ButtonChat />
            <ButtonCall />
            <ButtonMail />
        </div>
    );
}
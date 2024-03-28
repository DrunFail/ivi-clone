import MemoizedFormattedMessage from "react-intl/src/components/message";
import styles from "./SupportBlockButton.module.scss";
import Button from "../../../UI/core/Button/Button";
import FontIcon from "../../../UI/FontIcon/FontIcon";
export default function SupportBlockButton({ variant }: {variant: "desktop" | "tablet" | "mobile"}) {
    const defaultClasses = `
    ${styles.container}
    ${styles[variant]}
    `

    return (
        <div className={defaultClasses} data-testid="btns-support-block">
            
            <Button as="button">
                <MemoizedFormattedMessage id="WriteInChat" />
            </Button>
            <Button
                as="button"
                size="mini"
            >
                <FontIcon variant="phone" />
            </Button>
            
            <Button
                as="button"
                size="mini"
            >
                <FontIcon variant="mail" />
            </Button>
        </div>
    );
}
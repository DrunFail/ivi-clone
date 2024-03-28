import { FormattedMessage } from "react-intl";
import AskIvi from "../AskIvi/AskIvi";
import SupportBlockButton from "../SupportBlockButton/SupportBlockButton";
import styles from "./SupportBlock.module.scss";

interface SupportBlockProps {
    variant: "desktop" | "tablet" | "mobile"
}

export default function SupportBlock({ variant }:SupportBlockProps) {
    return (
        <div className={styles.container} data-testid="support-block">
            {variant === "desktop" &&
                <h3>
                    <FormattedMessage id="Support" />
                </h3>
            }
            <p>
                <FormattedMessage id="WeAreAlwaysReadyToHelpYou" />
                <br />
                <FormattedMessage id="OurOperatorsAreOnline" />
            </p>
            <SupportBlockButton variant={variant} />
            <AskIvi />

        </div>
    );
}
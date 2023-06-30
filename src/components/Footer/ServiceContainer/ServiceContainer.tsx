import { FormattedMessage } from "react-intl";
import AskIvi from "../AskIvi/AskIvi";
import SupportBlockButton from "../SupportBlockButton/SupportBlockButton";
import styles from "./ServiceContainer.module.scss";

export default function ServiceContainer({ variant }: {variant: "desktop" | "tablet" | "mobile"}) {
    return (
        <div className={styles.container}>
            <h4>
                <FormattedMessage id="Support" />
            </h4>
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
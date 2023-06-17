import { FormattedMessage } from "react-intl";
import AskIvi from "../AskIvi/AskIvi";
import SupportBlockButtonContainer from "../SupportBlockButtonContainer/SupportBlockButtonContainer";
import ButtonCall from "../UI/ButtonCall/ButtonCall";
import ButtonChat from "../UI/ButtonChat/ButtonChat";
import ButtonMail from "../UI/ButtonMail/ButtonMail";
import styles from "./ServiceContainer.module.scss";

export default function ServiceContainer() {
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


            <SupportBlockButtonContainer>
                <ButtonChat />
                <ButtonCall />
                <ButtonMail />
            </SupportBlockButtonContainer>
            <AskIvi />

        </div>
    );
}
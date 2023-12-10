import { FormattedMessage } from "react-intl";
import MyButton from "../../../UI/MyButton/MyButton";

export default function ButtonSubscription() {
    return (
        <MyButton type="button" data-testid="btn-sub">
            <FormattedMessage id="PayForASubscription" />
        </MyButton>
    );
}
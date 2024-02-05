import { FormattedMessage } from "react-intl";
import Button from "../../../UI/Button/Button";

export default function ButtonSubscription() {
    return (
        <Button color="red" data-testid="btn-sub">
            <FormattedMessage id="PayForASubscription" />
        </Button>
    );
}
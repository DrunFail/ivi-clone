import { FormattedMessage } from "react-intl";
import Button from "../Button/Button";

export default function ButtonChat() {
    return (
        <Button>
            <FormattedMessage id="WriteInChat" />
        </Button>
    );
}
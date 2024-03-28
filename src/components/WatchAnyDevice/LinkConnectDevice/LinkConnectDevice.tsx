import { FormattedMessage } from "react-intl";
import Button from "../../UI/core/Button/Button";

export default function LinkConnectDevice() {
    return (
        <Button as="link" href="https://www.ivi.ru/devices" color="red">
            <FormattedMessage id="ConnectDevice" />
        </Button>
    );
}
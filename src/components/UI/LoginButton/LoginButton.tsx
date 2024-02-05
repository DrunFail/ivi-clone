import { FormattedMessage } from "react-intl";
import Button from "../Button/Button";

export default function LoginButton() {
    return (
        <Button as="link" href="/auth/login" color="red" >
            <FormattedMessage id="EnterOrRegister" />
        </Button>
    );
}
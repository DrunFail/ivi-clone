import { FormattedMessage } from "react-intl";
import MyButton from "../MyButton/MyButton";

export default function SignInButton() {
    return (
        <MyButton
            type="button"
            bg_color="pink"
            size="large"
        >
            <FormattedMessage id="EnterOrRegister" />
        </MyButton>
    );
}
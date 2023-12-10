import MyButton from "../MyButton/MyButton";
import { FormattedMessage } from "react-intl";
import { useRouter } from "next/router";

export default function LoginButton() {
    const router = useRouter();

    return (
        <MyButton
            data-testid="btn-login"
            style={{ inlineSize: "100%" }}
            type="button"
            bg_color="pink"
            size="large"
            onClick={() => router.push('/auth/login')}
        >
            <FormattedMessage id="EnterOrRegister" />
        </MyButton>
    );
}
import { FormattedMessage } from "react-intl";
import MyButton from "../MyButton/MyButton";

export default function ButtonChat() {
    return (
        <MyButton type="button" bg_color="footer">
            <FormattedMessage id="WriteInChat" />
        </MyButton>
    );
}
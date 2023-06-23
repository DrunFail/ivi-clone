import { FormattedMessage } from "react-intl";
import MyButton from "../MyButton/MyButton";

export default function ButtonDetails() {
    return (
        <MyButton type="button" bg_color="footer" size="large">
            <FormattedMessage id="Detail" />
        </MyButton>
    );
}
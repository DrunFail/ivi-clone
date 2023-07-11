import { FormattedMessage } from "react-intl";
import MyButton from "../MyButton/MyButton";

export default function ButtonTrailer() {
    return (
        <MyButton type="button" bg_color="footer" size="medium">
            <FormattedMessage id="trailer" />
        </MyButton>
    );
}
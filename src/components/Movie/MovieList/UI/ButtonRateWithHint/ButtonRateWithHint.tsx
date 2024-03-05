import { FaStar } from "react-icons/fa";
import ButtonWithHint from "../../../../UI/ButtonWithHint/ButtonWithHint";

export default function ButtonRateWithHint() {
    return (
        <ButtonWithHint description="button.hint.rate">
            <FaStar color="white" />
        </ButtonWithHint>
    );
}

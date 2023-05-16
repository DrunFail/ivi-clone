import { FaBookmark } from "react-icons/fa";
import ButtonWithHint from "../../../../UI/ButtonWithHint/ButtonWithHint";

export default function ButtonWatchLaterWithHint() {
    return (
        <ButtonWithHint description="button.hint.watchLater">
            <FaBookmark color="white" />
        </ButtonWithHint>
    );
}
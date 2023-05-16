import { FaThumbsDown } from "react-icons/fa";
import ButtonWithHint from "../../../../UI/ButtonWithHint/ButtonWithHint";

export default function ButtonDislikeWithHint() {
    return (
        <ButtonWithHint description="button.hint.dislike">
            <FaThumbsDown color="white" />
        </ButtonWithHint>
    );
}

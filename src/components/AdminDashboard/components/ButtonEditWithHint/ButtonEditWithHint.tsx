import { FaPenSquare } from "react-icons/fa";
import ButtonWithHint from "../../../UI/ButtonWithHint/ButtonWithHint";

export default function ButtonDislikeWithHint({ onClickHandler }: {onClickHandler: () => void}) {
    return (
        <ButtonWithHint description="button.hint.edit" actionHandler={onClickHandler }>
            <FaPenSquare color="white" fontSize="16px" />
        </ButtonWithHint>
    );
}
import ButtonWithHint from "../../UI/ButtonWithHint/ButtonWithHint";
import FontIcon from "../../UI/FontIcon/FontIcon";

export default function UserOverlayIcon() {
    return (
        <>
            <ButtonWithHint description="button.hint.watchLater">
                <FontIcon variant="bookmark2" size={20} />
            </ButtonWithHint>
            <ButtonWithHint description="button.hint.rate" >
                <FontIcon variant="star" size={20} />
            </ButtonWithHint>
            <ButtonWithHint description="button.hint.similar" >
                <FontIcon variant="magic_wand" size={20} />
            </ButtonWithHint>
            <ButtonWithHint description="button.hint.dislike">
                <FontIcon variant="eye" size={20} />
            </ButtonWithHint>
        </>
    );
}
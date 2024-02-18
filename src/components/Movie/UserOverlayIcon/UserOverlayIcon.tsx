import ButtonDislikeWithHint from "../MovieList/UI/ButtonDislikeWithHint/ButtonDislikeWithHint";
import ButtonRateWithHint from "../MovieList/UI/ButtonRateWithHint/ButtonRateWithHint";
import ButtonSimilarWithHint from "../MovieList/UI/ButtonSimilarWithHint/ButtonSimilarWithHint";
import ButtonWatchLaterWithHint from "../MovieList/UI/ButtonWatchLaterWithHint/ButtonWatchLaterWithHint";

export default function UserOverlayIcon() {
    return (
        <>
            <ButtonWatchLaterWithHint />
            <ButtonRateWithHint />
            <ButtonSimilarWithHint />
            <ButtonDislikeWithHint />
        </>
    );
}
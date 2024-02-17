import styles from "../../../MovieList/components/OverlayMovieListItem/OverlayMovieListItem.module.scss";
import ButtonDislikeWithHint from "../../../MovieList/UI/ButtonDislikeWithHint/ButtonDislikeWithHint";
import ButtonRateWithHint from "../../../MovieList/UI/ButtonRateWithHint/ButtonRateWithHint";
import ButtonSimilarWithHint from "../../../MovieList/UI/ButtonSimilarWithHint/ButtonSimilarWithHint";
import ButtonWatchLaterWithHint from "../../../MovieList/UI/ButtonWatchLaterWithHint/ButtonWatchLaterWithHint";

interface OverlaySliderItemProps {
    
}


export default function OverlaySimilar({  }: OverlaySliderItemProps) {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <div className={styles.icons}>
                    <ButtonWatchLaterWithHint />
                    <ButtonSimilarWithHint />
                    <ButtonRateWithHint />
                    <ButtonDislikeWithHint />
                </div>
                <div className={styles.info}>
                </div>
            </div>
        </div>
    );
}

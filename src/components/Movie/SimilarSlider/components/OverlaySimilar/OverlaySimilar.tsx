import React from "react";
import styles from "../../../MovieList/components/OverlayMovieListItem/OverlayMovieListItem.module.scss";
import ButtonDislikeWithHint from "../../../MovieList/UI/ButtonDislikeWithHint/ButtonDislikeWithHint";
import ButtonRateWithHint from "../../../MovieList/UI/ButtonRateWithHint/ButtonRateWithHint";
import ButtonSimilarWithHint from "../../../MovieList/UI/ButtonSimilarWithHint/ButtonSimilarWithHint";
import ButtonWatchLaterWithHint from "../../../MovieList/UI/ButtonWatchLaterWithHint/ButtonWatchLaterWithHint";
import MainAdvantage from "../../../MovieList/UI/MainAdvantage/MainAdvantage";

interface OverlaySliderItemProps {
    elem: ISimiliar;
    rand: number
}

const elemArr = {
    a: 1,
    b: 2,
    c: 3
};

export default function OverlaySimilar({ elem, rand }: OverlaySliderItemProps) {
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
                    {/*<RaitingOverlay*/}
                    {/*    raiting={elem?.rating || rand.toFixed(1)}*/}
                    {/*    raitingArr={elem?.ratingArr || elemArr}*/}
                    {/*/>*/}
                    <MainAdvantage />
                </div>
            </div>
        </div>
    );
}

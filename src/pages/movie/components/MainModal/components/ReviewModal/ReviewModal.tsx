import styles from "../../../Actors/Actors.module.scss";
import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import Carousel from "../../../../../../components/Carousel/Carousel";
import { DATA } from "../../../../../../components/movieList/data/data";
import { REVIEWLIST_SIZE } from "../../../../../../components/MovieList/constants/constants";
import ReviewList from "./components/ReviewList";
import { useRouter } from "next/router";

const ReviewModal: FC<{ callback: () => void }> = ({ callback }) => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div className={styles.Actors__all}>
            <h1 onClick={() => callback()}>
                <FormattedMessage id="Review" />
            </h1>
            <>
                <Carousel
                    href={`/movie/${String(id)}?type=review`}
                    mode={"slider"}
                    carouselId={"carouselId"}
                    data={DATA.result}
                    count={40}
                    sizes={REVIEWLIST_SIZE}
                    callback={() => callback()}
                    component={ReviewList}
                />
            </>
        </div>
    );
};

export default ReviewModal;

import styles from "../../../person/Actors/Actors.module.scss";
import React, { FC } from "react";
import { FormattedMessage } from "react-intl";
import ReviewList from "./components/ReviewList";
import { useRouter } from "next/router";
import Carousel from "../../../Carousel/Carousel";
import { DATA } from "../../../MovieList/data/data";
import { REVIEWLIST_SIZE } from "../../../Movie/MovieList/constants/constants";
import { useSelector } from "react-redux";
import { getFilm } from "../../../../store/film";

const ReviewModal: FC<{ callback: () => void }> = ({ callback }) => {
    const router = useRouter();
    const { id } = router.query;
    const film = useSelector(getFilm());
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
                    data={film.reviews.rows || []}
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

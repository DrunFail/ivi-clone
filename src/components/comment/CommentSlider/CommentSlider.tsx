"use client";

import Carousel from "../../UI/Carousel/Carousel";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import styles from "./CommentSlider.module.scss";
import { Review } from "../../../models/types";
import { ResponseWithCountAndRows } from "../../../models/response";
import Button from "../../UI/core/Button/Button";
import { REVIEWLIST_SIZE } from "../../../constants/sliderItemSize";
import { useTranslations } from "next-intl";
import SliderCommentCardContainer from "../cardContainers/SliderCommentCardContainer/SliderCommentCardContainer";

interface CommentSliderProps {
    commentData: ResponseWithCountAndRows<Review>,
    movieName: string,
    movieId: number
}
export default function CommentSlider({ commentData, movieName, movieId }: CommentSliderProps) {
    const t = useTranslations();
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <p>
                        {t("comment.about", {movie:movieName}) }
                    </p>
                </div>
                <Button>
                    {t("comment.comment") }
                </Button>
            </div>
            <div className={styles.slider}>
                {commentData && commentData.count
                    ? <Carousel
                        href={`/movie/${String(movieId)}?type=review`}
                        mode={"slider"}
                        data={commentData.rows}
                        count={commentData.rows.length}
                        sizes={REVIEWLIST_SIZE}
                        component={SliderCommentCardContainer}
                    />
                    : <EmptyCommentCard variant="slider" />
                }
            </div>

        </div>
    );
}
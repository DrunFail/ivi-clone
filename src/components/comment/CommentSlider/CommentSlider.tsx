"use client";

import { FormattedMessage } from "react-intl";
import Carousel from "../../UI/Carousel/Carousel";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import styles from "./CommentSlider.module.scss";
import { Review } from "../../../models/types";
import { ResponseWithCountAndRows } from "../../../models/response";
import CommentCardContainer from "./CommentCardContainer/CommentCardContainer";
import Button from "../../UI/core/Button/Button";
import { REVIEWLIST_SIZE } from "../../../constants/sliderItemSize";

interface CommentSliderProps {
    commentData: ResponseWithCountAndRows<Review>,
    movieName: string,
    movieId: number
}
export default function CommentSlider({  commentData, movieName, movieId }: CommentSliderProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <p>
                        <FormattedMessage
                            id="comment.about"
                            values={{ movie: movieName }} />
                    </p>
                </div>
                <Button>
                    <FormattedMessage id="comment.comment" />
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
                        component={CommentCardContainer}
                    />
                    : <EmptyCommentCard variant="slider" />
                }
            </div>

        </div>
    );
}
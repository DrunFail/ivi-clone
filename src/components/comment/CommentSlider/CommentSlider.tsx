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
    callback: () => void,
    movieName: string,
    movieId: number
}
export default function CommentSlider({ callback, commentData, movieName, movieId }: CommentSliderProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h1 onClick={() => callback()}>
                        <FormattedMessage id="Review" />
                    </h1>
                    <p>
                        <FormattedMessage
                            id="comment.about"
                            values={{ movie: movieName }} />
                    </p>
                </div>
                <Button onClick={callback}>
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
                        callback={() => callback()}
                        component={CommentCardContainer}
                    />
                    : <EmptyCommentCard variant="slider" />
                }
            </div>

        </div>
    );
}
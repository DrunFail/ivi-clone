import { FormattedMessage } from "react-intl";
import { REVIEWLIST_SIZE } from "../../Movie/MovieList/constants/constants";
import Carousel from "../../UI/Carousel/Carousel";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import styles from "./CommentSlider.module.scss";
import Button from "../../UI/Button/Button";
import { Review } from "../../../models/types";
import { ResponseWithCountAndRows } from "../../../models/response";
import CommentCardContainer from "./CommentCardContainer/CommentCardContainer";


  

interface CommentSliderProps {
    commentData: ResponseWithCountAndRows<Review>,
    callback: () => void,
    movieName: string,
    movieId: number
}

export default function CommentSlider({ callback, commentData,movieName,movieId }:CommentSliderProps) {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.text}>
                    <h1 onClick={() => callback()}>
                        <FormattedMessage id="Review" />
                    </h1>
                    <p>about movie {movieName}</p>
                </div>
                <Button onClick={callback}>
                    Comments
                </Button>
            </div>
            <div className={styles.slider}>
                {commentData && commentData.count
                    ? <Carousel
                        href={`/movie/${String(movieId)}?type=review`}
                        mode={"slider"}
                        carouselId={"com"}
                        data={commentData.rows}
                        count={commentData.rows.length}
                        sizes={REVIEWLIST_SIZE}
                        callback={() => callback()}
                        component={CommentCardContainer}
                    />
                    : <EmptyCommentCard />

                }
            </div>

        </div>
    );

}
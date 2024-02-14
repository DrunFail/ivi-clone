import CommentAddForm from "../CommentAddForm/CommentAddForm";
import CommentList from "../CommentList/CommentList";
import useCommentListReview from "../hooks/useCommentListReview";
import styles from "./CommentTabContainer.module.scss";


interface CommentTabContainerProps {
    movieKinopoiskId: number
}
export default function CommentTabContainer({ movieKinopoiskId }: CommentTabContainerProps) {
    const { commentData, updateCommentData } = useCommentListReview();
    return (
        <div className={styles.container}>
            <CommentAddForm movieKinopoiskId={movieKinopoiskId} sendCommentHandler={updateCommentData} />
            {commentData && <CommentList commentData={commentData} />}
        </div>
    );
}


import useCommentListReview from "../../../hooks/comment/useCommentListReview";
import CommentAddForm from "../CommentAddForm/CommentAddForm";
import CommentList from "../CommentList/CommentList";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import UnauthorizedAlert from "../UnauthorizedAlert/UnauthorizedAlert";
import styles from "./CommentTabContainer.module.scss";


interface CommentTabContainerProps {
    movieKinopoiskId: number
}
export default function CommentTabContainer({ movieKinopoiskId }: CommentTabContainerProps) {
    const { commentData, updateCommentData, isLoginUser, isCommentData } = useCommentListReview();

    return (
        <div className={styles.container}>
            {isLoginUser
                ? <CommentAddForm
                    inputId="addComment"
                    movieKinopoiskId={movieKinopoiskId}
                    sendCommentHandler={updateCommentData}
                />
                : <UnauthorizedAlert />
            }
            {isCommentData
                ? <CommentList commentData={commentData} />
                : <EmptyCommentCard variant="list" />
            }
        </div>
    );
}


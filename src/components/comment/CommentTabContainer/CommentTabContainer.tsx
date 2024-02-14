import CommentAddForm from "../CommentAddForm/CommentAddForm";
import CommentList from "../CommentList/CommentList";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import UnauthorizedAlert from "../UnauthorizedAlert/UnauthorizedAlert";
import useCommentListReview from "../hooks/useCommentListReview";
import styles from "./CommentTabContainer.module.scss";


interface CommentTabContainerProps {
    movieKinopoiskId: number
}
export default function CommentTabContainer({ movieKinopoiskId }: CommentTabContainerProps) {
    const { commentData, updateCommentData,isLoginUser,isCommentData } = useCommentListReview();
    
    return (
        <div className={styles.container}>
            {isLoginUser
                ? <CommentAddForm
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


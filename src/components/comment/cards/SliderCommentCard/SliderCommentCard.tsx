import CommentBody from "../../UI/CommentBody/CommentBody";
import CommentDateCreated from "../../UI/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../UI/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../UI/CommentUserName/CommentUserName";
import styles from "./SliderCommentCard.module.scss";

interface SliderCommentCardProps {
    modifiedCommentData: { commentAuthor: string, commentBody: string, commentCreatedDate: string }
}

export default function SliderCommentCard({modifiedCommentData }:SliderCommentCardProps) {
    return (
        <div className={styles.container}>
            <CommentUserName userName={modifiedCommentData.commentAuthor} />
            <CommentBody commentBody={modifiedCommentData.commentBody} />
            <div className={styles.footer}>
                <CommentDateCreated commentDate={modifiedCommentData.commentCreatedDate} />
                <CommentLikeCounter />
            </div>
        </div>
    );
}
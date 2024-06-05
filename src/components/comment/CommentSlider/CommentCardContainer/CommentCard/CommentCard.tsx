import CommentBody from "../../../../UI/comment/CommentBody/CommentBody";
import CommentDateCreated from "../../../../UI/comment/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../../../UI/comment/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../../../UI/comment/CommentUserName/CommentUserName";
import styles from "./CommentCard.module.scss";


interface CommentCardProps {
    modifiedCommentData: {commentAuthor: string, commentBody: string, commentCreatedDate: string},
}



export default function CommentCard({ modifiedCommentData}: CommentCardProps) {
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

import CommentBody from "../../../UI/CommentBody/CommentBody";
import CommentDateCreated from "../../../UI/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../../UI/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../../UI/CommentUserName/CommentUserName";
import { ModifiedCommentData } from "../../../interfaces/interfaces";
import styles from "./CommentCard.module.scss";


interface CommentCardProps {
    modifiedCommentData: ModifiedCommentData,
    callback: () => void,
}



export default function CommentCard({ modifiedCommentData, callback }: CommentCardProps) {
    return (
            <div className={styles.container} onClick={callback}>
                <CommentUserName userName={modifiedCommentData.commentAuthor} />
                <CommentBody commentBody={modifiedCommentData.commentBody} />
                <div className={styles.footer}>
                    <CommentDateCreated commentDate={modifiedCommentData.commentCreatedDate} />
                    <CommentLikeCounter />
                </div>
            </div>
    );
}

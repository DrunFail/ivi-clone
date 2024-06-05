import FontIcon from "../../../UI/FontIcon/FontIcon";
import CommentBody from "../../../UI/comment/CommentBody/CommentBody";
import CommentDateCreated from "../../../UI/comment/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../../UI/comment/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../../UI/comment/CommentUserName/CommentUserName";
import Button from "../../../UI/core/Button/Button";
import styles from "./CommentItemCard.module.scss";

interface CommentItemCardProps {
    authorName: string,
    dateCreated: string,
    commentBody: string,
    replyToggle: () => void,
    isAuthUser: boolean
}

export default function CommentItemCard({ authorName, dateCreated, commentBody, replyToggle, isAuthUser }: CommentItemCardProps) {
    return (
        <>
            <div className={styles.commentGrid}>
                <div className={styles.comment}>
                    <div className={styles.header}>
                        <CommentUserName userName={authorName} />
                        <CommentDateCreated commentDate={dateCreated} />
                    </div>
                    <CommentBody commentBody={commentBody} />
                </div>

            </div>
            <div className={styles.footer}>
                <CommentLikeCounter />
                {isAuthUser && <Button
                    onlyImage
                    onClick={replyToggle}>
                    <FontIcon variant="reply" size={16} />
                </Button>}

            </div>
        </>
    );
}
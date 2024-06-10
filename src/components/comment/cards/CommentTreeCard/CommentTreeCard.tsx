import FontIcon from "../../../UI/FontIcon/FontIcon";
import Button from "../../../UI/core/Button/Button";
import CommentBody from "../../UI/CommentBody/CommentBody";
import CommentDateCreated from "../../UI/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../UI/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../UI/CommentUserName/CommentUserName";
import styles from "./CommentTreeCard.module.scss";

interface CommentTreeCardProps {
    authorName: string,
    dateCreated: string,
    commentBody: string,
    replyToggle?: () => void,
    isAuthUser: boolean
}

export default function CommentTreeCard({ authorName, dateCreated, commentBody, replyToggle, isAuthUser }:CommentTreeCardProps) {
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
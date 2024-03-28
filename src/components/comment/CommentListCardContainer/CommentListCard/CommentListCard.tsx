import { ReviewTree } from "../../../../models/types";
import CommentBody from "../../../UI/comment/CommentBody/CommentBody";
import CommentDateCreated from "../../../UI/comment/CommentDateCreated/CommentDateCreated";
import CommentLikeCounter from "../../../UI/comment/CommentLikeCounter/CommentLikeCounter";
import CommentUserName from "../../../UI/comment/CommentUserName/CommentUserName";
import Button from "../../../UI/core/Button/Button";
import CommentAddForm from "../../CommentAddForm/CommentAddForm";
import { ModifiedCommentData } from "../../interfaces/interfaces";
import CommentListCardContainer from "../CommentListCardContainer";
import styles from "./CommentListCard.module.scss";
import { BsReply } from "react-icons/bs";

interface CommentListCardProps {
    modifiedCommentData: ModifiedCommentData,
    replyOpen: boolean,
    setReplyOpen: (isReply: boolean) => void,
    showChildComment: boolean,
    setShowChildComment: (isShow: boolean) => void,
    changeCommentState: (newComment: ReviewTree) => void,
    isLoginUser: boolean
}
export default function CommentListCard({ replyOpen, setReplyOpen, showChildComment, setShowChildComment, modifiedCommentData, changeCommentState, isLoginUser }: CommentListCardProps) {
    
    return (
        <div className={styles.container}>
            <div className={styles.commentGrid}>
                <div className={styles.comment}>
                    <div className={styles.header}>
                        <CommentUserName userName={modifiedCommentData.commentAuthor} />
                        <CommentDateCreated commentDate={modifiedCommentData.commentCreatedDate} />
                    </div>
                    <CommentBody commentBody={modifiedCommentData.commentBody} />
                </div>

            </div>
            <div className={styles.footer}>
                <CommentLikeCounter />
                {isLoginUser && <Button
                    onlyImage
                    onClick={() => setReplyOpen(!replyOpen)}>
                    <BsReply color="white" size="20px" />
                </Button>}

            </div>
            {replyOpen && <CommentAddForm
                inputId={`addComment-${modifiedCommentData.commentId}`}
                    movieKinopoiskId={modifiedCommentData.movieKinopoiskId}
                    parentId={modifiedCommentData.commentId}
                    sendCommentHandler={changeCommentState} />
            }
            {modifiedCommentData.commentChildList &&
                <Button
                    onlyImage
                    style={{ color: "white" }}
                    onClick={() => setShowChildComment(!showChildComment)}>
                    {showChildComment ? "Скрыть" : "Комментарии"}
                </Button>

            }

            {showChildComment && <div style={{ marginInlineStart: "20px", display: "grid", rowGap: "15px", marginBlockStart: "10px" }}>
                {modifiedCommentData.commentChildList &&
                    modifiedCommentData.commentChildList.map(child =>
                        <CommentListCardContainer
                            key={child.id}
                            commentData={child}
                        />)}
            </div>}
        </div>

    );
}
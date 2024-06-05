"use client";

import { PickedReview } from "../interfaces/interfaces";
import useCommentCardState from "../../../hooks/comment/useCommentCardState";
import CommentItemCard from "./CommentItemCard/CommentItemCard";
import Button from "../../UI/core/Button/Button";
import CommentAddForm from "../CommentAddForm/CommentAddForm";
import modifiedDate from "../../../utils/modifiedDate";
import styles from "./CommentListCardContainer.module.scss";
import CommentList from "../CommentList/CommentList";
import { useTranslations } from "next-intl";
import useOptimisticAddCommentWithFormState from "../../../hooks/comment/useOptimisticAddCommentWithFormState";

interface CommentListCardContainerProps {
    commentData: PickedReview
}

export default function CommentListCardContainer({ commentData }: CommentListCardContainerProps) {
    const { showChildComment, replyOpen, setReplyOpen, setShowChildComment} = useCommentCardState();
    const { optimisticReviews, state, action } = useOptimisticAddCommentWithFormState(commentData);
    const t = useTranslations();


    return (
        <div className={styles.container}>
            <CommentItemCard
                authorName={optimisticReviews.profile.username}
                dateCreated={modifiedDate(optimisticReviews.createdAt)}
                commentBody={optimisticReviews.text}
                replyToggle={() => setReplyOpen(!replyOpen)}
                isAuthUser={true}
            />
            {replyOpen &&
                <CommentAddForm
                    error={state?.errors.commentText}
                    inputId={`addComment-${optimisticReviews.id}`}
                    movieKinopoiskId={optimisticReviews.filmId}
                    parentId={optimisticReviews.id}
                    action={action} />
            }
            {!!optimisticReviews.childs.length &&
                <Button
                    onlyImage
                    style={{ color: "white" }}
                    onClick={() => setShowChildComment(!showChildComment)}>
                    {showChildComment ? t("comment.hideChild") : t("comment.showChild")}
                </Button>

            }

            {showChildComment && !!optimisticReviews.childs.length &&
                <CommentList  variant="child">
                    {optimisticReviews.childs.map(child =>
                        <CommentListCardContainer
                            key={child.id}
                            commentData={child}
                        />
                    )}
                </CommentList>
            }
        </div>
    );
}
"use client";

import CommentAddForm from "../CommentAddForm/CommentAddForm";
import CommentList from "../CommentList/CommentList";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import UnauthorizedAlert from "../UnauthorizedAlert/UnauthorizedAlert";
import styles from "./CommentPageContent.module.scss";
import { PickedReview } from "../interfaces/interfaces";
import { isAuthClient } from "../../auth/isAuthClient";
import useOptimisticAddCommentWithFormState from "../../../hooks/comment/useOptimisticAddCommentWithFormState";
import CommentTreeCardContainer from "../cardContainers/CommentTreeCardContainer/CommentTreeCardContainer";

interface CommentTabContainerProps {
    movieKinopoiskId: number;
    commentTree: PickedReview[]
}
export default function CommentPageContent({ movieKinopoiskId, commentTree }: CommentTabContainerProps) {
    const { optimisticReviews, state, action } = useOptimisticAddCommentWithFormState(commentTree);

    return (
        <div className={styles.container}>
            {isAuthClient ?
                <CommentAddForm
                    error={state?.errors.commentText}
                    action={action}
                    inputId="addComment"
                    movieKinopoiskId={movieKinopoiskId}
                />
                : <UnauthorizedAlert />

            }
            {!!commentTree.length
                ? <CommentList variant="parent">
                    {optimisticReviews.map(comment =>
                        <CommentTreeCardContainer
                            key={comment.id}
                            commentData={comment} />
                    )}
                </CommentList>
                :
                <EmptyCommentCard variant="list" />
            }
        </div>
    );
}


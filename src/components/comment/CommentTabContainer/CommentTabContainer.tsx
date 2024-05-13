"use client";

import useCommentListReview from "../../../hooks/comment/useCommentListReview";
import { ReviewTree } from "../../../models/types";
import CommentAddForm from "../CommentAddForm/CommentAddForm";
import CommentList from "../CommentList/CommentList";
import EmptyCommentCard from "../EmptyCommentCard/EmptyCommentCard";
import UnauthorizedAlert from "../UnauthorizedAlert/UnauthorizedAlert";
import styles from "./CommentTabContainer.module.scss";


interface CommentTabContainerProps {
    movieKinopoiskId: number;
    commentTree: ReviewTree[]
}
export default function CommentTabContainer({ movieKinopoiskId,commentTree }: CommentTabContainerProps) {
    const { commentData, updateCommentData, isLoginUser, isCommentData } = useCommentListReview(commentTree);

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


'use client';

import CommentAddForm from '../CommentAddForm/CommentAddForm';
import CommentList from '../CommentList/CommentList';
import EmptyCommentCard from '../EmptyCommentCard/EmptyCommentCard';
import UnauthorizedAlert from '../UnauthorizedAlert/UnauthorizedAlert';
import styles from './CommentPageContent.module.scss';
import { PickedReview } from '../interfaces/interfaces';
import useOptimisticAddCommentWithFormState from '../../../hooks/comment/useOptimisticAddCommentWithFormState';
import CommentTreeCardContainer from '../cardContainers/CommentTreeCardContainer/CommentTreeCardContainer';
import useAuth from '@/hooks/auth/useAuth';

interface CommentTabContainerProps {
    movieKinopoiskId: number;
    commentTree: PickedReview[];
}
export default function CommentPageContent({ movieKinopoiskId, commentTree }: CommentTabContainerProps) {
    const { optimisticReviews, state, action } = useOptimisticAddCommentWithFormState(commentTree);
    const { auth } = useAuth();
    return (
        <div className={styles.container}>
            {auth ? (
                <CommentAddForm
                    error={state?.errors.commentText}
                    action={action}
                    inputId="addComment"
                    movieKinopoiskId={movieKinopoiskId}
                />
            ) : (
                <UnauthorizedAlert />
            )}
            {!!commentTree.length ? (
                <CommentList variant="parent">
                    {optimisticReviews.map((comment) => (
                        <CommentTreeCardContainer key={comment.id} commentData={comment} />
                    ))}
                </CommentList>
            ) : (
                <EmptyCommentCard variant="list" />
            )}
        </div>
    );
}

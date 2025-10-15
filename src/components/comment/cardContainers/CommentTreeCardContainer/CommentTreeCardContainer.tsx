'use client';

import { PickedReview } from '../../interfaces/interfaces';
import useCommentCardState from '../../../../hooks/comment/useCommentCardState';
import Button from '../../../UI/core/Button/Button';
import CommentAddForm from '../../CommentAddForm/CommentAddForm';
import modifiedDate from '../../../../utils/modifiedDate';
import styles from './CommentTreeCardContainer.module.scss';
import CommentList from '../../CommentList/CommentList';
import { useTranslations } from 'next-intl';
import useOptimisticAddCommentWithFormState from '../../../../hooks/comment/useOptimisticAddCommentWithFormState';
import CommentTreeCard from '../../cards/CommentTreeCard/CommentTreeCard';

interface CommentTreeCardContainerProps {
    commentData: PickedReview;
}

export default function CommentTreeCardContainer({ commentData }: CommentTreeCardContainerProps) {
    const { showChildComment, replyOpen, setReplyOpen, setShowChildComment } = useCommentCardState();
    const { optimisticReviews, state, action } = useOptimisticAddCommentWithFormState(commentData);
    const t = useTranslations();

    return (
        <div className={styles.container}>
            <CommentTreeCard
                authorName={optimisticReviews.profile.username}
                dateCreated={modifiedDate(optimisticReviews.createdAt)}
                commentBody={optimisticReviews.text}
                replyToggle={() => setReplyOpen(!replyOpen)}
                isAuthUser={true}
            />
            {replyOpen && (
                <CommentAddForm
                    error={state?.errors.commentText}
                    inputId={`addComment-${optimisticReviews.id}`}
                    movieKinopoiskId={optimisticReviews.filmId}
                    parentId={optimisticReviews.id}
                    action={action}
                />
            )}
            {!!optimisticReviews.childs.length && (
                <Button onlyImage style={{ color: 'white' }} onClick={() => setShowChildComment(!showChildComment)}>
                    {showChildComment ? t('comment.hideChild') : t('comment.showChild')}
                </Button>
            )}

            {showChildComment && !!optimisticReviews.childs.length && (
                <CommentList variant="child">
                    {optimisticReviews.childs.map((child) => (
                        <CommentTreeCardContainer key={child.id} commentData={child} />
                    ))}
                </CommentList>
            )}
        </div>
    );
}

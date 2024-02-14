import { ReviewTree } from "../../../models/types";
import useCommentListCard from "../hooks/useCommentListCard";
import CommentListCard from "./CommentListCard/CommentListCard";

interface CommentListCardContainerProps {
    commentData: ReviewTree
}

export default function CommentListCardContainer({ commentData }: CommentListCardContainerProps) {
    const { showChildComment, replyOpen, setReplyOpen, setShowChildComment, changeCommentState, modifiedCommentData, isLoginUser } = useCommentListCard(commentData);

    return (
        <CommentListCard
            replyOpen={replyOpen}
            setReplyOpen={setReplyOpen}
            showChildComment={showChildComment}
            setShowChildComment={setShowChildComment}
            changeCommentState={changeCommentState}
            modifiedCommentData={modifiedCommentData}
            isLoginUser={isLoginUser }
        />
    );
}
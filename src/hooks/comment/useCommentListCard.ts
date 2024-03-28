import { useState } from "react";
import useCommentData from "./useCommentData";
import { ReviewTree } from "../../models/types";
import useAuth from "../auth/useAuth";

export default function useCommentListCard(commentData: ReviewTree) {
    const [replyOpen, setReplyOpen] = useState(false);
    const [showChildComment, setShowChildComment] = useState(false);
    const [currentComment, setCurrentComment] = useState(commentData);
    const modifiedCommentData = useCommentData(currentComment);

    const changeCommentState = (newComment: ReviewTree) => {
        setCurrentComment((currentComment) => (
            {
                ...currentComment,
                childs: [...currentComment.childs!, { ...newComment, childs: [] }]
            }))
        setReplyOpen(false)
    }

    const auth = useAuth();
    const isLoginUser = Boolean(auth?.auth?.token)


    return {replyOpen, setReplyOpen, showChildComment, setShowChildComment, changeCommentState, modifiedCommentData, isLoginUser};
}
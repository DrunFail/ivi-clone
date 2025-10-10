import { useState } from "react";
import { ReviewTree } from "../../models/types";
import useAuth from "../auth/useAuth";

export default function useCommentListReview(commentTree:ReviewTree[]) {
    const [commentData, setCommentData] = useState<ReviewTree[]>(commentTree);
    

    const auth = useAuth();
    const isLoginUser = Boolean(auth)

    const isCommentData = Boolean(commentData.length)

    

    const updateCommentData = (newComment: ReviewTree) => {
        setCommentData(([...commentData, { ...newComment, childs: [] }]))
    }

    return {commentData, updateCommentData, isLoginUser, isCommentData}
}
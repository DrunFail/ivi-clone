import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ReviewTree } from "../../models/types";
import useAuth from "../auth/useAuth";
import { ReviewAPI } from "../../api/ReviewAPI";

export default function useCommentListReview() {
    const [commentData, setCommentData] = useState<ReviewTree[]>([]);
    const router = useRouter();
    const { id } = router.query;

    const auth = useAuth();
    const isLoginUser = Boolean(auth?.auth?.token)

    const isCommentData = Boolean(commentData.length)

    useEffect(() => {
        const fetchComment = async () => {
            try {
                const response = await ReviewAPI.getReviewTreeByMovieId(+id!)
                setCommentData(response.data)

            } catch (error) {
                console.log(error)
            }
        }
        fetchComment()
    }, [])

    const updateCommentData = (newComment: ReviewTree) => {
        setCommentData(([...commentData, { ...newComment, childs: [] }]))
    }

    return {commentData, updateCommentData, isLoginUser, isCommentData}
}
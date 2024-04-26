import { useEffect, useState } from "react";
import { ReviewTree } from "../../models/types";
import useAuth from "../auth/useAuth";
import { ReviewAPI } from "../../api/ReviewAPI";
import { useParams } from "next/navigation";

export default function useCommentListReview() {
    const [commentData, setCommentData] = useState<ReviewTree[]>([]);
    const id = useParams<{ id: string }>()!.id;

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
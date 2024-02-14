import { useEffect, useState } from "react";
import { ReviewTree } from "../../../models/types";
import { useRouter } from "next/router";
import { ReviewAPI } from "../../../api/ReviewAPI";

export default function useCommentListReview() {
    const [commentData, setCommentData] = useState<ReviewTree[]>([]);
    const router = useRouter();
    const { id } = router.query;


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

    return {commentData, updateCommentData}
}
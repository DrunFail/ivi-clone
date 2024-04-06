import useCommentData from "../../../../hooks/comment/useCommentData"
import { Review } from "../../../../models/types"
import CommentCard from "./CommentCard/CommentCard"

interface CommentDataContainerProps {
    elem: Review,
}
export default function CommentCardContainer({ elem}: CommentDataContainerProps) {
    const modifiedCommentData = useCommentData(elem)
    return (
        <CommentCard modifiedCommentData={modifiedCommentData} />
    )
}
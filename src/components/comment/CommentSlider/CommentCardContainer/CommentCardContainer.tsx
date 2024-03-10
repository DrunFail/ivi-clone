import { Review } from "../../../../models/types"
import useCommentData from "../../hooks/useCommentData"
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
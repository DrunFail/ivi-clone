import { ReviewTree } from "../../../../models/types"
import useCommentData from "../../hooks/useCommentData"
import CommentCard from "./CommentCard/CommentCard"

interface CommentDataContainerProps {
    elem: ReviewTree,
    callback: () => void
}
export default function CommentCardContainer({ elem,callback }: CommentDataContainerProps) {
    const modifiedCommentData = useCommentData(elem)
    return (
        <CommentCard modifiedCommentData={modifiedCommentData} callback={callback } />
    )
}
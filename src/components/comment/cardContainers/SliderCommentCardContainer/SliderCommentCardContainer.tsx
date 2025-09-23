import useCommentData from "../../../../hooks/comment/useCommentData"
import { Review } from "../../../../models/types"
import SliderCommentCard from "../../cards/SliderCommentCard/SliderCommentCard"

interface SliderCommentCardContainerProps {
    elem: Review,
}
export default function SliderCommentCardContainer({ elem}: SliderCommentCardContainerProps) {
    const modifiedCommentData = useCommentData(elem);
    return (
        <SliderCommentCard modifiedCommentData={modifiedCommentData}  />
    )
}
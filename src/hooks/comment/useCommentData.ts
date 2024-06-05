import { Review } from "../../models/types";
import modifiedDate from "../../utils/modifiedDate";

export default function useCommentData(commentData: Review) {
    const commentCreatedDate = modifiedDate(commentData?.createdAt);
    const commentAuthor = commentData.profile?.username || "unknown";
    const commentBody = commentData.text;
    const commentChildList = commentData.childs?.length ? commentData.childs : null;
    const movieKinopoiskId = commentData.filmId;
    const commentId = commentData.id;
    

    return {commentCreatedDate, commentAuthor, commentBody,commentChildList,movieKinopoiskId,commentId}
}
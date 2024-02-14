import { ReviewTree } from "../../../models/types";

export interface ModifiedCommentData {
	commentCreatedDate: string,
	commentAuthor: string,
	commentBody: string,
	commentChildList: ReviewTree[] | null,
	movieKinopoiskId: number,
	commentId: number
}
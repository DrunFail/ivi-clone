import styles from "./CommentList.module.scss";
import { ReviewTree } from "../../../models/types";
import CommentListCardContainer from "../CommentListCardContainer/CommentListCardContainer";

interface CommentListProps {
    commentData: ReviewTree[]
}
export default function CommentList({ commentData }: CommentListProps) {
    return (
        <div className={styles.container}>
            {commentData.map(comment =>
                <CommentListCardContainer
                    key={comment.id}
                    commentData={comment} />
            )}
        </div>
    );
}
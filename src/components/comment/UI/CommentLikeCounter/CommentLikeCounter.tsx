import FontIcon from "../../../UI/FontIcon/FontIcon";
import styles from "./CommentLikeCounter.module.scss";

export default function CommentLikeCounter() {
    return (
        <div className={styles.container}>
            <FontIcon variant="thumbsUp" />
            <span>1</span>
            <FontIcon variant="thumbsDown" />
        </div>
    );
}
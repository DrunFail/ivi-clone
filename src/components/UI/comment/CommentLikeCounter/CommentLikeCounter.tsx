import styles from "./CommentLikeCounter.module.scss";
import FontIcon from "../../FontIcon/FontIcon";

export default function CommentLikeCounter() {
    return (
        <div className={styles.container}>
            <FontIcon variant="thumbsUp" />
            <span>1</span>
            <FontIcon variant="thumbsDown" />
        </div>
    );
}
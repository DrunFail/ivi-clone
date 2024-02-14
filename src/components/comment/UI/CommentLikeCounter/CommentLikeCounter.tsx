import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import styles from "./CommentLikeCounter.module.scss";

export default function CommentLikeCounter() {
    return (
        <div className={styles.container}>
            <BsHandThumbsUp />
            <div>1</div>
            <BsHandThumbsDown />
        </div>
    );
}
import styles from "./CommentDateCreated.module.scss";

interface CommentDateCreatedProps {
    commentDate: string
}
export default function CommentDateCreated({ commentDate }: CommentDateCreatedProps) {
    return (
        <div className={styles.date}>{commentDate}</div>
    );
}
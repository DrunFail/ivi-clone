import styles from './CommentBody.module.scss';

interface CommentBodyProps {
    commentBody: string;
}
export default function CommentBody({ commentBody }: CommentBodyProps) {
    return <div className={styles.text}>{commentBody}</div>;
}

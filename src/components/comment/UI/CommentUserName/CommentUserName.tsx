import styles from './CommentUserName.module.scss';

interface CommentUserNameProps {
    userName: string;
}
export default function CommentUserName({ userName }: CommentUserNameProps) {
    return <div className={styles.username}>{userName}</div>;
}

import styles from "./CommentList.module.scss";

export default function CommentList({ children,variant }: {children:React.ReactNode,variant:"child" | "parent"}) {
    return (
        <div className={styles[variant]}>
            {children }
        </div>
    );
}
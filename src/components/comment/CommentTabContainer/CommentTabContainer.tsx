import styles from "./CommentTabContainer.module.scss";

export default function CommentTabContainer({ children }: {children:React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}


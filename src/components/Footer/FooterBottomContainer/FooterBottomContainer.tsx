import styles from "./FooterBottomContainer.module.scss";

export default function FooterBottomContainer({ children }: {children:React.ReactNode}) {
    return (
        <div className={styles.container}>
            {children }
        </div>
    );
}
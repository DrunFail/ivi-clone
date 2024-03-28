import styles from "./NavBarModalTitle.module.scss";
export default function NavBarModalTitle({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.text} data-testId="nav-title-hamb">
            {children}
        </div>
    );
}
import styles from "./NavBarModalTitle.module.scss";
export default function NavBarModalTitle({ children }: { children: React.ReactNode }) {
    return (
        <h3 className={styles.text }>{children}</h3>
    );
}
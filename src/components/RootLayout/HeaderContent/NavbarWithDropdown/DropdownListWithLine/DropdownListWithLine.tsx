import styles from "./DropdownListWithLine.module.scss";

export default function DropdownListWithLine({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container} data-testid="dropdown-line">
            {children}
        </div>
    );
}
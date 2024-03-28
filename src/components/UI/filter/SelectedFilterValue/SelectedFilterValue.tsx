import styles from "./SelectedFilterValue.module.scss";

interface SelectedFilterValueProps {
    children: React.ReactNode
}

export default function SelectedFilterValue({children }: SelectedFilterValueProps) {
    return (
        <span className={styles.text}>
            {children }
        </span>
    );
}
import styles from "./SelectedFilterValue.module.scss";

interface SelectedFilterValueProps {
    children: React.ReactNode,
    id?: string
}

export default function SelectedFilterValue({ children, id }: SelectedFilterValueProps) {
    const elemId = `selected-${id}`
    return (
        <span className={styles.text} id={elemId}>
            {children }
        </span>
    );
}
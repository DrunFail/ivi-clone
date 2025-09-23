import styles from "./FilterName.module.scss";

interface FilterNameProps {
    children: React.ReactNode
}
export default function FilterName({children }:FilterNameProps) {
    return (
        <span className={styles.text}>
            {children }
        </span>
    );
}
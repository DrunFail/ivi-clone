import styles from "./PropertyList.module.scss";

interface PropertyListProps {
    children: React.ReactNode
}

export default function PropertyList({children }:PropertyListProps) {
    return (
        <div className={styles.info}>
            {children }
        </div>
    );
}
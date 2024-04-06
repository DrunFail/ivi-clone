import styles from "./PersonPageNamePerson.module.scss";

interface PersonPageNamePersonProps {
    children: React.ReactNode
}

export default function PersonPageNamePerson({ children }:PersonPageNamePersonProps) {
    return (
        <h1 className={styles.name}>
            {children}
        </h1>
    );
}
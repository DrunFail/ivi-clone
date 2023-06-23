import styles from "./PersonPageNamePerson.module.scss";

export default function PersonPageNamePerson({ personName }: { personName: string }) {
    return (
        <h1 className={styles.name }>{personName}</h1>
    );
}
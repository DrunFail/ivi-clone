import styles from "./AgeRestriction.module.scss";

interface AgeRestrictionProps {
    age?: string
}

export default function AgeRestriction({ age = "12" }: AgeRestrictionProps) {
    return (
        <div className={styles.age}>{age}+</div>
    );
}

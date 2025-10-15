import styles from './PersonName.module.scss';

interface PersonNameProps {
    name: string;
}
export default function PersonName({ name }: PersonNameProps) {
    return <div className={styles.name}>{name}</div>;
}

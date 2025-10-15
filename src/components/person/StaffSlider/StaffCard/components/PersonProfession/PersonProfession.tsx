import styles from './PersonProfession.module.scss';

interface PersonProfessionProps {
    profession: string;
}
export default function PersonProfession({ profession }: PersonProfessionProps) {
    return <div className={styles.profession}>{profession}</div>;
}

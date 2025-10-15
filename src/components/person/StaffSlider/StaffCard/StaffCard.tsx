import Avatar from '../../../UI/Avatar/Avatar';
import styles from './StaffCard.module.scss';
import PersonName from './components/PersonName/PersonName';
import PersonProfession from './components/PersonProfession/PersonProfession';

interface StaffCardProps {
    modifiedPersonData: {
        personId: number;
        posterUrl: string;
        profession: string;
        splittedName: string[];
    };
}
export default function StaffCard({ modifiedPersonData }: StaffCardProps) {
    return (
        <div className={styles.container}>
            <Avatar variant={88} urlAvatar={modifiedPersonData.posterUrl} />
            <div>
                {modifiedPersonData.splittedName.map((name, index) => (
                    <PersonName key={index} name={name} />
                ))}

                <PersonProfession profession={modifiedPersonData.profession} />
            </div>
        </div>
    );
}

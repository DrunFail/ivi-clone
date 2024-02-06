import styles from "./StaffCard.module.scss";
import PersonName from "./components/PersonName/PersonName";
import PersonProfession from "./components/PersonProfession/PersonProfession";
import PersonPhoto from "../../PersonPhoto/PersonPhoto";

interface StaffCardProps {
    modifiedPersonData: {
        personId: number,
        posterUrl: string,
        profession: string,
        splittedName: string[]
    }
}
export default function StaffCard({ modifiedPersonData }: StaffCardProps) {
    
    
    return (
        <div className={styles.container}>
            <PersonPhoto
                variant={88}
                urlPersonPhoto={modifiedPersonData.posterUrl}
            />
            <div>
                {modifiedPersonData.splittedName.map((name, index) => (
                    <PersonName
                        key={index}
                        name={name} />
                )
                )}
                
                <PersonProfession
                    profession={modifiedPersonData.profession} />
            </div>
            
        </div>
    );
}
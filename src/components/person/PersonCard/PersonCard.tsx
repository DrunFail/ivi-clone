import { IStaff } from "../../../models";
import MedallionContent from "../../PageContainers/MedallionContent/MedallionContent";
import MedallionDescription from "../../PageContainers/MedallionDescription/MedallionDescription";
import PersonPhoto from "../PersonPhoto/PersonPhoto";
import styles from "./PersonCard.module.scss";

export default function PersonCard({ personData }: {personData: IStaff}) {
    return (
        <div className={styles.container}>
            <MedallionContent>
                <PersonPhoto
                    urlPersonPhoto={personData.posterUrl}
                    variant="medallion"
                />
            </MedallionContent>
            <MedallionDescription>
                <p>{personData.nameRu}</p>
            </MedallionDescription>
            
            
            
        </div>
    );
}
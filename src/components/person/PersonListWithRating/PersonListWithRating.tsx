import { useResize } from "../../../hooks/useResize";
import { Person } from "../../../models/types";
import RatingBlock from "../../Rating/RatingBlock/RatingBlock";
import Avatar from "../../UI/Avatar/Avatar";
import MedallionContent from "./MedallionContent/MedallionContent";
import styles from "./PersonListWithRating.module.scss";

interface PersonListWithRatingProps {
    persons: Person[],
    movieRating: string | number
}

export default function PersonListWithRating({ persons,movieRating }: PersonListWithRatingProps) {
    const size = useResize();
    let personAmount: number = 4;
    if (size < 1160) personAmount = 5;
    const slicedPersons = persons.length > personAmount ? persons.slice(0, personAmount) : persons

    return (
        <div className={styles.container }>
            <div className={styles.item }>
                <MedallionContent>
                    <RatingBlock ratingValue={+movieRating} />
                </MedallionContent>
                
                    <span>Рейтинг Иви</span>
                        
                
            </div>
            {slicedPersons.map(person =>
                <div key={person.id} className={styles.item}>
                    <MedallionContent >
                        <Avatar variant="medallion" urlAvatar={person.posterUrl} />
                    </MedallionContent>
                    
                        <span>{person.nameRu}</span>
                    
                </div>
            )}

        </div>


    );
}
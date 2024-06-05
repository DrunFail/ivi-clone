import { Person } from "../../../models/types";
import { Link } from "../../../navigation";
import RatingBlock from "../../Rating/RatingBlock/RatingBlock";
import Avatar from "../../UI/Avatar/Avatar";
import MedallionContent from "./MedallionContent/MedallionContent";
import styles from "./PersonListWithRating.module.scss";

interface PersonListWithRatingProps {
    persons: Person[],
    movieRating: string | number
}

export default function PersonListWithRating({ persons, movieRating }: PersonListWithRatingProps) {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <MedallionContent>
                    <RatingBlock ratingValue={+movieRating} />
                </MedallionContent>
                <span>Рейтинг Иви</span>
            </div>
            {persons.map(person =>
                <Link href={`/person/${person.id}`} key={person.id}>
                    <div className={styles.item}>
                        <MedallionContent >
                            <Avatar variant="medallion" urlAvatar={person.posterUrl} />
                        </MedallionContent>
                        <span>{person.nameRu}</span>
                    </div>
                </Link>
            )}

        </div>
    );
}
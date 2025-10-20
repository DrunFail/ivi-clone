import { Link } from '@/i18n/navigation';
import { Person } from '../../../models/types';
import RatingBlock from '../../Rating/RatingBlock/RatingBlock';
import Avatar from '../../UI/Avatar/Avatar';
import MedallionContent from './MedallionContent/MedallionContent';
import styles from './PersonListWithRating.module.scss';
import { useTranslations } from 'next-intl';

interface PersonListWithRatingProps {
    persons: Person[];
    movieRating: string | number;
}

export default function PersonListWithRating({ persons, movieRating }: PersonListWithRatingProps) {
    const t = useTranslations('image');
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <MedallionContent>
                    <RatingBlock ratingValue={+movieRating} />
                </MedallionContent>
                <span>Рейтинг Иви</span>
            </div>
            {persons.map((person) => (
                <Link href={`/person/${person.personId}`} key={person.id}>
                    <figure className={styles.item}>
                        <MedallionContent>
                            <Avatar
                                variant="medallion"
                                urlAvatar={person.posterUrl}
                                alt={t('person', { person: person.nameRu })}
                            />
                        </MedallionContent>
                        <figcaption>{person.nameRu}</figcaption>
                    </figure>
                </Link>
            ))}
        </div>
    );
}

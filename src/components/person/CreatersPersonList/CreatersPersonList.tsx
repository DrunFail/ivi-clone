import Image from 'next/image';
import styles from './CreatersPersonList.module.scss';
import { Link } from '@/i18n/navigation';
import { Person } from '@/models/types';
import { calculatePersonName } from '@/utils/calculatePersonName';
import { useTranslations } from 'next-intl';

interface CreatersPersonListProps {
    personList: Person[];
    listTitle: string;
}
export default function CreatersPersonList({ personList, listTitle }: CreatersPersonListProps) {
    const t = useTranslations('image');
    return (
        <div className={styles.container}>
            <h3>{listTitle}</h3>
            <div className={styles.list}>
                {personList.map((person) => {
                    const splittedName = calculatePersonName(person);
                    return (
                        <Link key={person.id} href={`/person/${person.personId}`}>
                            <figure>
                                <div className={styles.image}>
                                    <Image
                                        src={person.posterUrl || ''}
                                        alt={t('person', { person: person.nameRu })}
                                        fill
                                    />
                                </div>
                                <figcaption>
                                    {splittedName.map((name, index) => (
                                        <span key={index} className={styles.personName}>
                                            {name}
                                        </span>
                                    ))}
                                </figcaption>
                            </figure>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
}

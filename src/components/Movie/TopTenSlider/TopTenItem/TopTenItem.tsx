import Image from 'next/image';
import FadeBottomTop from '../FadeBottomTop/FadeBottomTop';
import FilmTitleTop from '../FilmTitleTop/FilmTitleTop';
import NumberRatingTop from '../NumberRatingTop/NumberRatingTop';
import styles from './TopTenItem.module.scss';
import { Link } from '@/i18n/navigation';

interface TopTenItemProps {
    elem: { id: number; href: string; name: string };
}

export default function TopTenItem({ elem }: TopTenItemProps) {
    return (
        <Link href={elem.href} aria-label={`перейти на страницу фильма ${elem.name}`}>
            <div className={styles.item}>
                <div className={styles.container}>
                    <Image
                        src={`/top10/${elem.id}.jpg`}
                        fill
                        alt=""
                        sizes="
(max-width: 440px) calc((100vw - 12px) / 2),
(max-width: 600px) calc((100vw - 24px) / 3),
(max-width: 882px) calc((100vw - 36px) / 4),
(max-width: 1215px) calc((100vw - 48px) / 5),
(min-width: 1216px) calc((100vw - 48px) / 5)
"
                    />
                </div>
                <FadeBottomTop>
                    <FilmTitleTop rating={elem.id} />
                    <NumberRatingTop rating={elem.id} />
                </FadeBottomTop>
            </div>
        </Link>
    );
}

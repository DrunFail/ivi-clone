import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import Image from 'next/image';
import Button from '../../UI/core/Button/Button';
import { useLocale, useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface SlideProps {
    styles: { [key: string]: string };
    filmData: any;
}

export default function Slide({ styles, filmData }: SlideProps) {
    const locale = useLocale();
    const genreLink = '/movies/' + filmData.genreRu;
    const t = useTranslations();

    return (
        <Link href={genreLink} className={styles.slide}>
            <div style={{ position: 'relative' }} className={styles.slide__banner}>
                <Image
                    src={`/mainSlider/${filmData.id}.webp`}
                    alt={locale === 'ru' ? filmData.nameRu : filmData.nameEn}
                    fill
                    priority
                    fetchPriority="high"
                    sizes={`
                    (max-width: 1215px) calc(100vw - 40px),
                    (min-width: 1216px) 1216px,
                    `}
                    quality={75}
                />
            </div>
            <div className={styles.slide__textBlock}>
                <p className={styles.slide__title}>{locale === 'ru' ? filmData.nameRu : filmData.nameEn}</p>
                <p className={styles.slide__call}>{locale === 'ru' ? filmData.callRu : filmData.callEn}</p>
                <div>
                    <Button as="button" color="red">
                        {t('WatchInTheGalery')}
                    </Button>
                </div>
            </div>
        </Link>
    );
}

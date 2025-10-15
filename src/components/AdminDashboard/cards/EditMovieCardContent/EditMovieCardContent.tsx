import Image from 'next/image';
import styles from './EditMovieCardContent.module.scss';
import { Movie } from '../../../../models/types';
import TextFieldWithLabel from '../../../UI/TextFieldWithLabel/TextFieldWithLabel';
import PropertyList from '../../PropertyList/PropertyList';
import PropertyItem from '../../PropertyItem/PropertyItem';
import { useTranslations } from 'next-intl';

interface EditMovieCardContentProps {
    elem: Movie;
    countries: string;
    genres: string;
    newMovieName: { nameRu: string; nameOriginal: string | null };
    handleChangeNewMovieName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function EditMovieCardContent({
    elem,
    countries,
    genres,
    newMovieName,
    handleChangeNewMovieName,
}: EditMovieCardContentProps) {
    const t = useTranslations();
    return (
        <div className={styles.content}>
            <div className={styles.imageContainer}>
                <Image src={elem.posterUrlPreview} fill alt={elem.nameRu} />
            </div>
            <PropertyList>
                <PropertyItem description={elem.kinopoiskId}>{t('movie.kinopoiskId')}</PropertyItem>

                <PropertyItem description={elem.year}>{t('movie.year')}</PropertyItem>

                <PropertyItem description={elem.ratingKinopoisk ?? 0}>{t('movie.rating')}</PropertyItem>

                <PropertyItem description={countries}>{t('movie.countries')}</PropertyItem>

                <PropertyItem description={elem.filmLength ?? 'unknown'}>{t('movie.length')}</PropertyItem>

                <PropertyItem description={genres}>{t('movie.genres')}</PropertyItem>

                <PropertyItem description={elem.nameRu}>{t('movie.currentNameRu')}</PropertyItem>

                <TextFieldWithLabel
                    labelText={t('movie.newNameRu')}
                    id="nameRu"
                    name="nameRu"
                    value={newMovieName.nameRu}
                    onChange={handleChangeNewMovieName}
                />

                <PropertyItem description={elem.nameOriginal ?? 'unknown'}>{t('movie.currentNameEng')}</PropertyItem>

                <TextFieldWithLabel
                    labelText={t('movie.newNameEng')}
                    id="nameOriginal"
                    name="nameOriginal"
                    value={newMovieName.nameOriginal ?? ''}
                    onChange={handleChangeNewMovieName}
                />
            </PropertyList>
        </div>
    );
}

import TextFieldWithLabel from '../../../UI/TextFieldWithLabel/TextFieldWithLabel';
import { Genre } from '../../../../models/types';
import PropertyList from '../../PropertyList/PropertyList';
import PropertyItem from '../../PropertyItem/PropertyItem';
import { useTranslations } from 'next-intl';

interface EditGenreCardContentProps {
    newGenreName: { genreNameRu: string; genreNameEng: string };
    handleChangeNewGenreName: (e: React.ChangeEvent<HTMLInputElement>) => void;
    genreItem: Genre;
}
export default function EditGenreCardContent({
    newGenreName,
    handleChangeNewGenreName,
    genreItem,
}: EditGenreCardContentProps) {
    const t = useTranslations();
    return (
        <PropertyList>
            <PropertyItem description={genreItem.id}>{t('movie.kinopoiskId')}</PropertyItem>

            <PropertyItem description={genreItem.genreNameRu}>{t('movie.currentNameRu')}</PropertyItem>

            <TextFieldWithLabel
                labelText={t('genre.newNameRu')}
                value={newGenreName.genreNameRu}
                id="genreNameRu"
                name="genreNameRu"
                onChange={handleChangeNewGenreName}
            />

            <PropertyItem description={genreItem.genreNameEng}>{t('movie.currentNameEng')}</PropertyItem>

            <TextFieldWithLabel
                labelText={t('genre.newNameEng')}
                value={newGenreName.genreNameEng}
                id="genreNameEng"
                name="genreNameEng"
                onChange={handleChangeNewGenreName}
            />
        </PropertyList>
    );
}

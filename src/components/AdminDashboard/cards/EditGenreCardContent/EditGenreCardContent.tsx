import TextFieldWithLabel from "../../../UI/TextFieldWithLabel/TextFieldWithLabel";
import { FormattedMessage } from "react-intl";
import { Genre } from "../../../../models/types";
import MemoizedFormattedMessage from "react-intl/src/components/message";
import PropertyList from "../../PropertyList/PropertyList";
import PropertyItem from "../../PropertyItem/PropertyItem";

interface EditGenreCardContentProps {
    newGenreName: { genreNameRu: string, genreNameEng: string },
    handleChangeNewGenreName: (e: React.ChangeEvent<HTMLInputElement>) => void,
    genreItem: Genre

}
export default function EditGenreCardContent({ newGenreName, handleChangeNewGenreName, genreItem }: EditGenreCardContentProps) {
    return (
        <PropertyList>

            <PropertyItem description={genreItem.id}>
                <MemoizedFormattedMessage id="movie.kinopoiskId" />
            </PropertyItem>

            <PropertyItem description={genreItem.genreNameRu}>
                <MemoizedFormattedMessage id="movie.currentNameRu" />
            </PropertyItem>

            <TextFieldWithLabel
                labelText={<FormattedMessage id="genre.newNameRu" />}
                value={newGenreName.genreNameRu}
                id="genreNameRu"
                name="genreNameRu"
                onChange={handleChangeNewGenreName}
            />

            <PropertyItem description={genreItem.genreNameEng}>
                <MemoizedFormattedMessage id="movie.currentNameEng" />
            </PropertyItem>

            <TextFieldWithLabel
                labelText={<FormattedMessage id="genre.newNameEng" />}
                value={newGenreName.genreNameEng}
                id="genreNameEng"
                name="genreNameEng"
                onChange={handleChangeNewGenreName}
            />
        </PropertyList>
    );
}
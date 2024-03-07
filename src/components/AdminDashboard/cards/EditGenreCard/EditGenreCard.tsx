import { useState } from "react";
import useAxiosAuth from "../../../auth/hooks/useAxiosAuth";
import EditCardContainer from "../../components/EditCardContainer/EditCardContainer";
import PropertyItem from "../../components/PropertyItem/PropertyItem";
import PropertyList from "../../components/PropertyList/PropertyList";
import TextFieldWithLabel from "../../../UI/TextFieldWithLabel/TextFieldWithLabel";
import { FormattedMessage } from "react-intl";

interface EditGenreCardProps {
    genreItem: any,
    handleCloseEdit: () => void
}

export default function EditGenreCard({ genreItem, handleCloseEdit }: EditGenreCardProps) {
    const axiosAuth = useAxiosAuth();
    const [newGenreName, setNewGenreName] = useState({ genreNameRu: genreItem.genreNameRu, genreNameEng: genreItem.genreNameEng });
    const [newNameRuError, setNewNameRuError] = useState("");
    const [newNameEngError, setNewNameEngError] = useState("");


    const handleChangeNewGenreName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGenreName({...newGenreName, [e.target.name]: e.target.value})
    }
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newGenreName.genreNameRu) {
            setNewNameRuError('required');
            return;
        }
        if (!newGenreName.genreNameEng) {
            setNewNameEngError('required');
            return
        }
        try {
            const response = await axiosAuth.post(`/api/movies/genres/${genreItem.id}`,
                { genreNameRu: newGenreName.genreNameRu, genreNameEng: newGenreName.genreNameEng });
            handleCloseEdit();

        } catch (error){
            console.log(error)
        }
    }
   


    return (
        <EditCardContainer handleCloseEdit={handleCloseEdit} handleSubmit={handleSubmit }>
            <PropertyList>
                <PropertyItem
                    intlId="genres.id"
                    description={genreItem.id} />

                <PropertyItem
                    intlId="genre.currentNameRu"
                    description={genreItem.genreNameRu} />
               
                <TextFieldWithLabel
                    labelText={<FormattedMessage id="genre.newNameRu" />}
                    value={newGenreName.genreNameRu}
                    id="genreNameRu"
                    name="genreNameRu"
                    onChange={handleChangeNewGenreName}
                />

                <PropertyItem
                    intlId="genre.currentNameEng"
                    description={genreItem.genreNameEng} />

                
                <TextFieldWithLabel
                    labelText={<FormattedMessage id="genre.newNameEng" />}
                    value={newGenreName.genreNameEng}
                    id="genreNameEng"
                    name="genreNameEng"
                    onChange={handleChangeNewGenreName }
                />
            </PropertyList>
        </EditCardContainer>
       
    );
}
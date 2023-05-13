import React, { useState } from "react";
import useAxiosAuth from "../../../auth/hooks/useAxiosAuth";
import EditCardContainer from "../../components/EditCardContainer/EditCardContainer";
import InputField from "../../components/InputField/InputField";
import PropertyItem from "../../components/PropertyItem/PropertyItem";
import PropertyList from "../../components/PropertyList/PropertyList";

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

                <InputField
                    intlId={"genre.newNameRu"}
                    value={newGenreName.genreNameRu}
                    name="genreNameRu"
                    changeHandler={handleChangeNewGenreName}
                    error={newNameRuError }
                />

                <PropertyItem
                    intlId="genre.currentNameEng"
                    description={genreItem.genreNameEng} />

                <InputField
                    intlId="genre.newNameEng"
                    value={newGenreName.genreNameEng}
                    name="genreNameEng"
                    changeHandler={handleChangeNewGenreName}
                    error={newNameEngError }
                />
            
            </PropertyList>
        </EditCardContainer>
       
    );
}
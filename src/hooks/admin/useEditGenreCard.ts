import { useState } from "react";
import { MovieAPI } from "../../api/MovieAPI";
import { Genre } from "../../models/types";

export default function useEditGenreCard(genreItem: Genre, handleCloseEdit: () => void) {
    const [newGenreName, setNewGenreName] = useState({ genreNameRu: genreItem.genreNameRu, genreNameEng: genreItem.genreNameEng });
    const [newNameRuError, setNewNameRuError] = useState("");
    const [newNameEngError, setNewNameEngError] = useState("");


    const handleChangeNewGenreName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewGenreName({ ...newGenreName, [e.target.name]: e.target.value })
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
            const response = await MovieAPI.updateGenreById(genreItem.id, {genreNameRu: newGenreName.genreNameRu, genreNameEng: newGenreName.genreNameEng})
            handleCloseEdit();

        } catch (error) {
            console.log(error)
        }
    }

    return {newGenreName, handleSubmit, handleChangeNewGenreName}
}
import { useState } from "react";
import useMovieListCardData from "../movie/useMovieListCardData";
import { Movie } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";

export default function useEditMovieCard(elem: Movie, handleCloseEdit: () => void) {
    const { countries, genres } = useMovieListCardData({ movieData: elem });

    const [newMovieName, setNewMovieName] = useState({ nameRu: elem.nameRu, nameOriginal: elem.nameOriginal });
    const [newNameRuError, setNewNameRuError] = useState("");
    const [newNameEngError, setNewNameEngError] = useState("");


    const handleChangeNewMovieName = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(newMovieName)
        console.log(e.target.name)
        setNewMovieName({ ...newMovieName, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!newMovieName.nameRu) {
            setNewNameRuError("required");
            return;
        }
        if (!newMovieName.nameOriginal) {
            setNewNameEngError("required");
            return
        }
        try {
            const response = await MovieAPI
                .updateMovie(elem.kinopoiskId, { nameRu: newMovieName.nameRu, nameOriginal: newMovieName.nameOriginal })
            handleCloseEdit();
        } catch (error) {
            console.log(error)
        }
    }
    return {handleSubmit, newMovieName, handleChangeNewMovieName, countries, genres}
}
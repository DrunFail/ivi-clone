import React, { useState } from "react";
import Image from "next/image";
import styles from "./EditMovieCard.module.scss";
import { MovieItemTest } from "../../../MovieList/interfaces/interfaces";
import useMovieData from "../../../MovieList/hooks/useMovieData";
import useAxiosAuth from "../../../auth/hooks/useAxiosAuth";
import EditCardContainer from "../../components/EditCardContainer/EditCardContainer";
import PropertyItem from "../../components/PropertyItem/PropertyItem";
import InputField from "../../components/InputField/InputField";

interface EditMovieCardProps {
    elem: MovieItemTest,
    handleCloseEdit: () => void
}


export default function EditMovieCard({ elem, handleCloseEdit }: EditMovieCardProps) {
    const { countries, genres } = useMovieData(elem);

    const axiosAuth = useAxiosAuth();
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
            const response = await axiosAuth.post(`/api/movies/about/${elem.kinopoiskId}`,
                { nameRu: newMovieName.nameRu, nameOriginal: newMovieName.nameOriginal });
            handleCloseEdit();

        } catch (error) {
            console.log(error)
        }
    }

    
    
    return (
        <EditCardContainer handleCloseEdit={handleCloseEdit} handleSubmit={handleSubmit }>
            <div className={styles.content}>
                <div className={styles.imageContainer }>
                    <Image src={elem.posterUrlPreview} fill alt={elem.nameRu} />
                </div>
                <div className={styles.info}>
                    <PropertyItem
                        intlId={"movie.kinopoiskId"}
                        description={elem.kinopoiskId} />

                    <PropertyItem
                        intlId={"movie.year"}
                        description={elem.year} />

                    <PropertyItem
                        intlId={"movie.rating"}
                        description={elem.ratingKinopoisk} />

                    <PropertyItem
                        intlId={"movie.countries"}
                        description={countries} />

                    <PropertyItem
                        intlId={"movie.length"}
                        description={elem.filmLength} />

                    <PropertyItem
                        intlId={"movie.genres"}
                        description={genres} />

                    <PropertyItem
                        intlId={"movie.currentNameRu"}
                        description={elem.nameRu} />

                    <InputField
                        intlId={"movie.newNameRu"}
                        value={newMovieName.nameRu}
                        name="nameRu"
                        changeHandler={handleChangeNewMovieName}
                        error={newNameRuError }
                    />
                    
                    <PropertyItem
                        intlId={"movie.currentNameEng"}
                        description={elem.nameOriginal} />

                    <InputField
                        intlId={"movie.newNameEng"}
                        value={newMovieName.nameOriginal}
                        name="nameOriginal"
                        changeHandler={handleChangeNewMovieName}
                        error={newNameEngError }                    />
                    
                </div>

            </div>

        </EditCardContainer>

    );
}
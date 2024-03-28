import { useState } from "react";
import EditCardContainer from "../EditCardContainer/EditCardContainer";
import useMovieListCardData from "../../../hooks/movie/useMovieListCardData";
import { Movie } from "../../../models/types";
import useDeleteMovieCard from "../../../hooks/admin/useDeleteMovieCard";
import useEditMovieCard from "../../../hooks/admin/useEditMovieCard";
import MovieListCardWithOverlay from "../../Movie/MovieListCardWithOverlay/MovieListCardWithOverlay";
import AdminOverlayIcon from "../../Movie/AdminOverlayIcon/AdminOverlayIcon";
import Modal from "../../UI/Modal/Modal";
import DeleteMovieCardContent from "../cards/DeleteMovieCardContent/DeleteMovieCardContent";
import EditMovieCardContent from "../cards/EditMovieCardContent/EditMovieCardContent";

interface MovieListItemAdminProps {
    elem: Movie
}

export default function MovieListItemAdmin({ elem }: MovieListItemAdminProps) {
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);
    const movieData = useMovieListCardData({movieData: elem})
    
    const editMovieHandler = () => {
        setEditVisible(editVisible => !editVisible)
    }

    const deleteMovieHandler = () => {
        setDeleteVisible(deleteVisible => !deleteVisible);
    }

    const closeModal = () => {
        setEditVisible(false)
        setDeleteVisible(false)
    }
    
    const { deleteSubmit } = useDeleteMovieCard(elem.id, editMovieHandler);
    const { handleSubmit, newMovieName, handleChangeNewMovieName, countries, genres } = useEditMovieCard(elem, deleteMovieHandler)
    return (
        <div>
            <MovieListCardWithOverlay
                icons={<AdminOverlayIcon deleteHandler={deleteMovieHandler} editHandler={editMovieHandler } />}
                modifiedMovieData={movieData.modifiedMovieData} />

            <Modal visible={editVisible || deleteVisible} callback={closeModal}>
                { deleteVisible &&
                    <EditCardContainer
                        handleCloseEdit={deleteMovieHandler}
                        handleSubmit={deleteSubmit}
                    >
                        <DeleteMovieCardContent
                            posterUrlPreview={elem.posterUrlPreview}
                            nameRu={elem.nameRu}
                        />
                    </EditCardContainer>
                }
                { editVisible &&
                    <EditCardContainer
                        handleCloseEdit={editMovieHandler}
                        handleSubmit={handleSubmit}
                    >
                        <EditMovieCardContent
                            countries={countries}
                            genres={genres}
                            elem={elem}
                            handleChangeNewMovieName={handleChangeNewMovieName}
                            newMovieName={newMovieName}
                        />
                    </EditCardContainer>
                }
            </Modal>
        </div>

    );
}
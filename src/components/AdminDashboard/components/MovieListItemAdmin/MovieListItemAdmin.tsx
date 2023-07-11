import { useState } from "react";
import EditMovieCard from "../../cards/EditMovieCard/EditMovieCard";
import DeleteMovieCard from "../../cards/DeleteMovieCard/DeleteMovieCard";
import MovieListItem from "../../../Movie/MovieList/components/MovieListItem/MovieListItem";
import OverlayMovieListItem from "../../../Movie/MovieList/components/OverlayMovieListItem/OverlayMovieListItem";
import Modal from "../../../UI/Modal/Modal";
import { MovieItemTest } from "../../../Movie/MovieList/interfaces/interfaces";
import ButtonEditWithHint from "../ButtonEditWithHint/ButtonEditWithHint";
import ButtonDeleteWithHint from "../ButtonDeleteWithHint/ButtonDeleteWithHint";

interface MovieListItemAdminProps {
    elem: MovieItemTest
}

export default function MovieListItemAdmin({ elem }: MovieListItemAdminProps) {
    const [editVisible, setEditVisible] = useState(false);
    const [deleteVisible, setDeleteVisible] = useState(false);

    const editMovieHandler = () => {
        setEditVisible(editVisible => !editVisible)
    }

    const deleteMovieHandler = () => {
        setDeleteVisible(deleteVisible => !deleteVisible);
    }

    return (
        <div>
            <MovieListItem movieItem={elem}>
                <OverlayMovieListItem movieItem={elem} infoVisible={false }>
                    <ButtonEditWithHint onClickHandler={editMovieHandler} />
                    <ButtonDeleteWithHint onClickHandler={deleteMovieHandler} />
                </OverlayMovieListItem>
            </MovieListItem>

            <Modal visible={editVisible} callback={editMovieHandler }>
                <EditMovieCard elem={elem} handleCloseEdit={editMovieHandler} />
            </Modal>
            <Modal visible={deleteVisible} callback={deleteMovieHandler}>
                <DeleteMovieCard elem={elem} handleCloseEdit={deleteMovieHandler} />
            </Modal>
        </div>

    );
}
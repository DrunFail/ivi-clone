import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { FaTrash, FaPenSquare } from "react-icons/fa";
import EditMovieCard from "../../cards/EditMovieCard/EditMovieCard";
import DeleteMovieCard from "../../cards/DeleteMovieCard/DeleteMovieCard";
import MovieListItem from "../../../Movie/MovieList/components/MovieListItem/MovieListItem";
import OverlayMovieListItem from "../../../Movie/MovieList/components/OverlayMovieListItem/OverlayMovieListItem";
import Modal from "../../../UI/Modal/Modal";
import { MovieItemTest } from "../../../Movie/MovieList/interfaces/interfaces";

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
            <MovieListItem elem={elem}>
                <OverlayMovieListItem elem={elem} infoVisible={false }>

                    <ButtonActionOverlay description={<FormattedMessage id="button.edit" />} actionHandler={editMovieHandler }>
                        <FaPenSquare color="white" fontSize="16px" />
                    </ButtonActionOverlay>
                    <ButtonActionOverlay description={<FormattedMessage id="button.delete" />} actionHandler={deleteMovieHandler }>
                        <FaTrash color="white" fontSize="16px"/>
                    </ButtonActionOverlay>
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
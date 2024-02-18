import { useState } from "react";
import EditMovieCard from "../../cards/EditMovieCard/EditMovieCard";
import DeleteMovieCard from "../../cards/DeleteMovieCard/DeleteMovieCard";
import Modal from "../../../UI/Modal/Modal";
import MovieListCardWithOverlay from "../../../Movie/MovieListCardWithOverlay/MovieListCardWithOverlay";
import AdminOverlayIcon from "../../../Movie/AdminOverlayIcon/AdminOverlayIcon";
import useMovieListCardData from "../../../Movie/hooks/useMovieListCardData";
import { Movie } from "../../../../models/types";

interface MovieListItemAdminProps {
    elem: Movie
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
    const movieData = useMovieListCardData({movieData: elem})
    return (
        <div>
            {/*<MovieListItem movieItem={elem}>*/}
            {/*    <OverlayMovieListItem movieItem={elem} infoVisible={false }>*/}
            {/*        <ButtonEditWithHint onClickHandler={editMovieHandler} />*/}
            {/*        <ButtonDeleteWithHint onClickHandler={deleteMovieHandler} />*/}
            {/*    </OverlayMovieListItem>*/}
            {/*</MovieListItem>*/}

            <MovieListCardWithOverlay
                icons={<AdminOverlayIcon deleteHandler={deleteMovieHandler} editHandler={editMovieHandler } />}
                modifiedMovieData={movieData.modifiedMovieData} />

            <Modal visible={editVisible} callback={editMovieHandler }>
                <EditMovieCard elem={elem} handleCloseEdit={editMovieHandler} />
            </Modal>
            <Modal visible={deleteVisible} callback={deleteMovieHandler}>
                <DeleteMovieCard elem={elem} handleCloseEdit={deleteMovieHandler} />
            </Modal>
        </div>

    );
}
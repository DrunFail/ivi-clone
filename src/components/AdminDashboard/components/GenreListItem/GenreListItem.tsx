import React, { useState } from "react";
import Modal from "../../../Modal/Modal";
import EditGenreCard from "../../cards/EditGenreCard/EditGenreCard";
import styles from "./GenreListItem.module.scss";

interface GenreListItemProps {
    genreItem: any
}

export default function GenreListItem({ genreItem }: GenreListItemProps) {
    const [editVisible, setEditVisible] = useState(false);
    const editHandler = () => {
        setEditVisible(editVisible => !editVisible)
    }

    return (
        <div>
            <div className={styles.genreItem} onClick={editHandler }>
            <p key={genreItem.id}>{genreItem.genreNameRu}</p>
            </div>
            <Modal visible={editVisible} callback={editHandler}>
                <EditGenreCard genreItem={genreItem} handleCloseEdit={editHandler} />
            </Modal>
        </div>
    );
}
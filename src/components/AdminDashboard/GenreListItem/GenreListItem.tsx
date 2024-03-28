import { useState } from "react";
import styles from "./GenreListItem.module.scss";
import EditCardContainer from "../EditCardContainer/EditCardContainer";
import { Genre } from "../../../models/types";
import Modal from "../../UI/Modal/Modal";
import EditGenreCardContent from "../cards/EditGenreCardContent/EditGenreCardContent";
import useEditGenreCard from "../../../hooks/admin/useEditGenreCard";

interface GenreListItemProps {
    genreItem: Genre
}

export default function GenreListItem({ genreItem }: GenreListItemProps) {
    const [editVisible, setEditVisible] = useState(false);
    const editHandler = () => {
        setEditVisible(editVisible => !editVisible)
    }
    const { newGenreName, handleChangeNewGenreName, handleSubmit } = useEditGenreCard(genreItem, editHandler)
    return (
        <div>
            <div className={styles.genreItem} onClick={editHandler }>
            <p key={genreItem.id}>{genreItem.genreNameRu}</p>
            </div>
            <Modal visible={editVisible} callback={editHandler}>
                <EditCardContainer handleCloseEdit={editHandler} handleSubmit={handleSubmit }>
                    <EditGenreCardContent
                        genreItem={genreItem}
                        handleChangeNewGenreName={handleChangeNewGenreName}
                        newGenreName={newGenreName}
                    />
                </EditCardContainer>

            </Modal>
        </div>
    );
}
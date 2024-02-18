import { FormattedMessage } from "react-intl";
import styles from "./DeleteMovieCard.module.scss";
import Image from "next/image";
import useAxiosAuth from "../../../auth/hooks/useAxiosAuth";
import ButtonContainer from "../../components/ButtonContainer/ButtonContainer";
import { Movie } from "../../../../models/types";

interface DeleteMovieCardProps {
    handleCloseEdit: () => void,
    elem: Movie
}

export default function DeleteMovieCard({handleCloseEdit,elem }:DeleteMovieCardProps) {
    const axiosAuth = useAxiosAuth();

    const deleteSubmit = async () => {
        try {
            const response = await axiosAuth.post(`api/movies/about/${elem.id}`);
            handleCloseEdit();
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <div className={styles.container }>
            <h3>Вы действительно хотите удалить фильм?</h3>
            <div className={styles.imageContainer}>
                <Image src={elem.posterUrlPreview} fill alt={elem.nameRu} />
            </div>
        <ButtonContainer>
            <button type='button' onClick={handleCloseEdit}><FormattedMessage id="button.cancel" /></button>
                <button type='button' onClick={deleteSubmit }><FormattedMessage id="button.delete" /></button>
        </ButtonContainer>
        </div>
    );
}
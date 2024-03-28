import { MovieAPI } from "../../api/MovieAPI";

export default function useDeleteMovieCard(movieId:number,handleCloseEdit:() => void) {
    const deleteSubmit = async () => {
        try {
            const response = await MovieAPI.deleteMovie(movieId)
            handleCloseEdit();
        } catch (error) {
            console.log(error)
        }

    }
    return {deleteSubmit}
}
import { useEffect, useState } from "react";
import { ResponseWithCountAndRows } from "../../../../models/response";
import { Movie } from "../../../../models/types";
import { MovieAPI } from "../../../../api/MovieAPI";


export default function useMovieSlider(genreId:number) {
    const [data, setData] = useState<ResponseWithCountAndRows<Movie> |null>(null);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                const responseData = await MovieAPI.getFilteredMovie({ genreId: genreId })
                setData(responseData)
            }
            catch (error) {
                console.log(error)
            }

        }
        fetchMovie()
    }, []);

    return data
}


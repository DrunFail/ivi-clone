import { useEffect, useState } from "react";
import { MovieItemTest } from "../../../Movie/MovieList/interfaces/interfaces";
import MovieListAdmin from "../../components/MovieListAdmin/MovieListAdmin";

export default function Movies() {
    const [data, setData] = useState<MovieItemTest[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/movies?page=1&size=10')
            .then(res => res.json())
            .then(data => setData(data.rows))


    },[])

    return (
        <div>
            <MovieListAdmin data={data} />
        </div>
    );
}
import { useEffect, useState } from "react";
import GenreListItem from "../../components/GenreListItem/GenreListItem";
import styles from "./Genres.module.scss";
import { Genre } from "../../../../models/types";


export default function Genres() {
    const [data, setData] = useState<Genre[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/movies/genres')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])


    return (
        <div className={styles.container}>
        <h1>Genres List</h1>
            <div className={styles.content}>
                {data.map(elem =>
                    <GenreListItem key={elem.id} genreItem={elem} />)}
            </div>
         
        </div>
    
    );
}
"use client";

import { ReactElement, useEffect, useState } from "react";
import { Genre } from "../../../../models/types";
import GenreListItem from "../../../../components/AdminDashboard/GenreListItem/GenreListItem";




export default function AdminGenres() {
    const [data, setData] = useState<Genre[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/movies/genres')
            .then(res => res.json())
            .then(data => setData(data))


    }, [])


    return (
        <div style={{ padding: "16px" }}>
            <h1 style={{
                fontSize: "24px",
                paddingBlockEnd: "20px",
                fontWeight: "500"
            }}>
                Genres List
            </h1>
            <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "16px"
            }}>
                {data.map(elem =>
                    <GenreListItem key={elem.id} genreItem={elem} />)}
            </div>

        </div>

    );
}

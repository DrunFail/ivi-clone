import React from "react";
import Carousel from "../../../Carousel/Carousel";
import { MOVIE_LIST_SIZES } from "../../../MovieList/constants/constants";
import { MovieItemTest } from "../../../MovieList/interfaces/interfaces";
import MovieListItemAdmin from "../MovieListItemAdmin/MovieListItemAdmin";

interface MovieListAdminProps {
    data: MovieItemTest[]
}


export default function MovieListAdmin({data }:MovieListAdminProps) {
    return (
        <div>
            <Carousel
                component={MovieListItemAdmin}
                mode={"list"}
                carouselId={"qwe"}
                data={data}
                count={50}
                sizes={MOVIE_LIST_SIZES}
            />
            
        </div>
    
    );
}
import { Movie } from "../../../../models/types";
import { MOVIE_LIST_SIZES } from "../../../Movie/MovieList/constants/constants";
import Carousel from "../../../UI/Carousel/Carousel";
import MovieListItemAdmin from "../MovieListItemAdmin/MovieListItemAdmin";

interface MovieListAdminProps {
    data: Movie[]
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
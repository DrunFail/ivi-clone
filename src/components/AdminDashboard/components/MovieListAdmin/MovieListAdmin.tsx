import { MOVIE_LIST_SIZES } from "../../../Movie/MovieList/constants/constants";
import { MovieItemTest } from "../../../Movie/MovieList/interfaces/interfaces";
import Carousel from "../../../UI/Carousel/Carousel";
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
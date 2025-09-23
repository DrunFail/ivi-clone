import { MovieAPI } from "../../../../../../api/MovieAPI";
import MoviePageModalLayout from "../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout";
import { getDictionary } from "../../../../dictionaries";

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function Layout({children, params: { id, locale } }: {children:React.ReactNode, params: { id: string, locale: "en" | "ru" } }) {
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale)



    return (
      
        <MoviePageModalLayout
            movie={movie}
            lang={locale}
            dict={dict }
        >
            <div id="not-inter">
           
                    {children}
                
            </div>
        </MoviePageModalLayout>
        
    );
}


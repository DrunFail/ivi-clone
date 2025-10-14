import { MovieAPI } from "../../../../../../api/MovieAPI";
import MoviePageModalLayout from "../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout";
import { getDictionary } from "../../../../dictionaries";

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ id: string, locale: string }> }) {
    const { id, locale } = await params as {id: string,locale: "ru" | "en"};
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);



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


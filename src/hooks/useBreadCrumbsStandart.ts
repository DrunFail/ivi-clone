import { useRouter } from "next/router";
import { useIntl } from "react-intl";
import { useAppSelector } from "./reduxHook";
import { selectAllGenres} from "../store/slices/genresSlice";



export default function useBreadCrumbsStandart() {
    const { asPath, query } = useRouter();
    const genreList = useAppSelector(selectAllGenres);
    const intl = useIntl();

    const splitedLinkList = asPath
        .split("/")
        .filter(item => item !== "all");

    let returnedLink = "/";
    const arrayLink = splitedLinkList.map((elem, index) => {
        if (index === 0) {
            const returnedLinkTitle = intl.formatMessage({ id: "MyIvi" });

            return { children: returnedLinkTitle, href: "/" }
        }
        if (elem === query.genre) {
            const currentGenre = genreList.genres.find(genre => genre.genreNameEng.toLowerCase() === elem.toLowerCase())
            if (currentGenre) {

                const genreName = intl.formatMessage({ id: `genre.${currentGenre.id}.title` });
                returnedLink = returnedLink + elem + "/";
                return { children: genreName, href: returnedLink }
            } 
            
        } 
        
            returnedLink = returnedLink + elem + "/";
            const returnedLinkTitle = intl.formatMessage({ id: `breadcrumbs.${elem}` })
            return { children: returnedLinkTitle, href: returnedLink }
        

    })


    return arrayLink;
}
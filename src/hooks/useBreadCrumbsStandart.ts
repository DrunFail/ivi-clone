import { useIntl } from "react-intl";
import { useAppSelector } from "./reduxHook";
import { selectAllGenres} from "../store/slices/genresSlice";
import { useParams, usePathname } from "next/navigation";



export default function useBreadCrumbsStandart() {
    
    const genre = useParams<{ genre: string }>()!.genre;
    const path = usePathname()!;

    const genreList = useAppSelector(selectAllGenres);
    const intl = useIntl();

    const splitedLinkList = path
        .split("/")
        .filter(item => item !== "all");

    let returnedLink = "/";
    const arrayLink = splitedLinkList.map((elem, index) => {
        if (index === 0) {
            const returnedLinkTitle = intl.formatMessage({ id: "MyIvi" });

            return { children: returnedLinkTitle, href: "/" }
        }
        if (elem === genre) {
                const genreName = intl.formatMessage({ id: `genre.${elem}` });
                returnedLink = returnedLink + elem + "/";
                return { children: genreName, href: returnedLink }
             
            
        } 
        
            returnedLink = returnedLink + elem + "/";
            const returnedLinkTitle = intl.formatMessage({ id: `breadcrumbs.${elem}` })
            return { children: returnedLinkTitle, href: returnedLink }
        

    })


    return arrayLink;
}
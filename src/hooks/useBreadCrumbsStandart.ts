import { useAppSelector } from "./reduxHook";
import { selectAllGenres} from "../store/slices/genresSlice";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";



export default function useBreadCrumbsStandart() {
    const t = useTranslations();
    const genre = useParams<{ genre: string }>()!.genre;
    const path = usePathname()!;

    const genreList = useAppSelector(selectAllGenres);

    const splitedLinkList = path
        .split("/")
        .filter(item => item !== "all");

    let returnedLink = "/";
    const arrayLink = splitedLinkList.map((elem, index) => {
        if (index === 0) {
            const returnedLinkTitle = t("MyIvi");

            return { children: returnedLinkTitle, href: "/" }
        }
        if (elem === genre) {
            const genreName = t(`genre.${elem}`);
                returnedLink = returnedLink + elem + "/";
                return { children: genreName, href: returnedLink }
             
            
        } 
        
            returnedLink = returnedLink + elem + "/";
        const returnedLinkTitle = t(`breadcrumbs.${elem}`);
            return { children: returnedLinkTitle, href: returnedLink }
        

    })


    return arrayLink;
}
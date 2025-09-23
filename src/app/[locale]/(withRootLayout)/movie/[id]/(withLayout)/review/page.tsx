import { MovieAPI } from "../../../../../../../api/MovieAPI";
import { ReviewAPI } from "../../../../../../../api/ReviewAPI";

import type { Metadata} from 'next'
import { calculateMovieName } from "../../../../../../../utils/calculateMovieName";
import { getTranslations } from "next-intl/server";
import CommentPageContent from "../../../../../../../components/comment/CommentPageContent/CommentPageContent";

type Props = {
    params: { id: string,locale:"ru" | "en" }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({ params}: Props): Promise<Metadata> {
    const id = params.id;
    const locale = params.locale;
    const t = await getTranslations();
    const movie = await MovieAPI.getMovieById(id);
    const movieName = calculateMovieName(movie.film, locale);
    return {
        title: t("page.comment.title", { movieName: movieName }),
        description: t("page.comment.description", {movieName})
    }
}



export default async function ReviewPage({ params: { id, locale } }: { params: { id: string, locale: "ru" | "en" } }) {
    const commentTree = await ReviewAPI.getReviewTreeByMovieId(+id);

    return (
        <CommentPageContent
            movieKinopoiskId={+id}
            commentTree={commentTree.data}
        />
    );
}
import { MovieAPI } from "../../../../../../../api/MovieAPI";
import { ReviewAPI } from "../../../../../../../api/ReviewAPI";
import MoviePageModal from "../../../../../../../components/Movie/MoviePageModal/MoviePageModal";
import MoviePageModalLayout from "../../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout";
import CommentPageContent from "../../../../../../../components/comment/CommentPageContent/CommentPageContent";
import { getDictionary } from "../../../../../dictionaries";

async function getCommentTree(id: number) {
    const commentTree = await ReviewAPI.getReviewTreeByMovieId(id);

    return commentTree.data;
}

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}


export default async function ReviewPageModal({ params: { id,locale } }: { params: { id: string,locale:"ru" | "en" } }) {
    const commentTree = await getCommentTree(+id);
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);
    return (
        <MoviePageModal>
            <MoviePageModalLayout
                movie={movie}
                dict={dict}
                lang={locale}
            >

                <CommentPageContent
                    movieKinopoiskId={+id}
                    commentTree={commentTree}
                />

            </MoviePageModalLayout>
        </MoviePageModal>

    );
}
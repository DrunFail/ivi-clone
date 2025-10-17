import { MovieAPI } from '../../../../../../../api/MovieAPI';
import { ReviewAPI } from '../../../../../../../api/ReviewAPI';
import MoviePageModal from '../../../../../../../components/Movie/MoviePageModal/MoviePageModal';
import MoviePageModalLayout from '../../../../../../../components/Movie/MoviePageModalLayout/MoviePageModalLayout';
import CommentPageContent from '../../../../../../../components/comment/CommentPageContent/CommentPageContent';

async function getCommentTree(id: number) {
    const commentTree = await ReviewAPI.getReviewTreeByMovieId(id);

    return commentTree.data;
}

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}

export default async function ReviewPageModal({ params }: { params: Promise<{ id: string; locale: 'ru' | 'en' }> }) {
    const { id, locale } = await params;
    const commentTree = await getCommentTree(+id);
    const movie = await getMovieById(id);
    return (
        <MoviePageModal>
            <MoviePageModalLayout movie={movie} lang={locale}>
                <CommentPageContent movieKinopoiskId={+id} commentTree={commentTree} />
            </MoviePageModalLayout>
        </MoviePageModal>
    );
}

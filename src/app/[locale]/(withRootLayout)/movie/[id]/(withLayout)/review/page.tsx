import { MovieAPI } from "../../../../../../../api/MovieAPI";
import { ReviewAPI } from "../../../../../../../api/ReviewAPI";
import CommentTabContainer from "../../../../../../../components/comment/CommentTabContainer/CommentTabContainer";
import MoviePageModalLayout from "../../../../../../../components/componentsTab/MoviePageModalLayout/MoviePageModalLayout";
import { getDictionary } from "../../../../../dictionaries";

async function getCommentTree(id:number){
    const commentTree = await ReviewAPI.getReviewTreeByMovieId(id);
    
    return commentTree.data;
}

async function getMovieById(movieId: string) {
    const movie = await MovieAPI.getMovieById(movieId);
    return movie;
}


export default async function ReviewPage({ params: { id,locale } }: { params: { id: string,locale:"ru" | "en" } }) {
    const commentTree = await getCommentTree(+id);
    const movie = await getMovieById(id);
    const dict = await getDictionary(locale);

    return (
         
        

        <CommentTabContainer
            movieKinopoiskId={+id}
            commentTree={commentTree}
            />
        
    );
}
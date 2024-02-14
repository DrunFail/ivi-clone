import { FormattedMessage } from "react-intl";
import styles from "./CommentAddForm.module.scss";
import Button from "../../UI/Button/Button";
import { ReviewTree } from "../../../models/types";
import useCommentAddForm from "../hooks/useCommentAddForm";

interface CommentAddFormProps {
    movieKinopoiskId: number,
    parentId?: number,
    sendCommentHandler?: (newComment: ReviewTree) => void
}


export default function CommentAddForm({movieKinopoiskId, parentId, sendCommentHandler }: CommentAddFormProps) {
    const {commentValue, updateCommentValue,createReview } = useCommentAddForm({sendCommentHandler,parentId, movieKinopoiskId});

    return (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); createReview() } }>
            <input type="text" value={commentValue} onChange={updateCommentValue} />
            <Button color="red" type="submit">
                <FormattedMessage id="Send" />
            </Button>
        </form>
    );
}
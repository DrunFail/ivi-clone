import { FormattedMessage } from "react-intl";
import styles from "./CommentAddForm.module.scss";
import { ReviewTree } from "../../../models/types";
import TextFieldWithLabel from "../../UI/TextFieldWithLabel/TextFieldWithLabel";
import useCommentAddForm from "../../../hooks/comment/useCommentAddForm";
import Button from "../../UI/core/Button/Button";

interface CommentAddFormProps {
    movieKinopoiskId: number,
    parentId?: number,
    sendCommentHandler?: (newComment: ReviewTree) => void,
    inputId: string
}


export default function CommentAddForm({ movieKinopoiskId, parentId, sendCommentHandler,inputId }: CommentAddFormProps) {
    const { commentValue, updateCommentValue, createReview } = useCommentAddForm({ sendCommentHandler, parentId, movieKinopoiskId });

    return (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); createReview() }}>
            <TextFieldWithLabel
                id={inputId}
                labelText="Написать отзыв"
                value={commentValue}
                onChange={updateCommentValue}
            />
            <Button color="red" type="submit">
                <FormattedMessage id="Send" />
            </Button>
        </form>
    );
}
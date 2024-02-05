import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { axiosAuth } from "../../../lib/axios";
import styles from "./CommentAddForm.module.scss";
import Button from "../../UI/Button/Button";

export default function CommentAddForm() {
    const [commentValue, setCommentValue] = useState("");
    const addComment = () => {
        axiosAuth.post('/api/reviews', {
            title: "wow",
            text: "dkdkdkdk",
            filmId: "4484927",
            parentId: null

        })
    }


    return (
        <form className={styles.form} onSubmit={(e) => { e.preventDefault(); addComment() } }>
            <input type="text" value={commentValue} onChange={(e) => setCommentValue(e.target.value) } />
            <Button color="red" type="submit">
                <FormattedMessage id="Send" />
            </Button>
        </form>
    );
}
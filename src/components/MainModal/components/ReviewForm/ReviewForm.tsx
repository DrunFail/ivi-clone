import React from "react";
import styles from "./ReviewForm.module.scss";
import { FormattedMessage } from "react-intl";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import MyInput from "../../../common/Input/MyInput";
import MyButton from "../../../UI/MyButton/MyButton";

const ReviewForm = () => {
    return (
        <div className={styles.Review}>
            <div className={styles.Review__inp}>
                <MyInput />
                <MyButton type="pink" size="medium">
                    <FormattedMessage id="Send"/>
                </MyButton>
            </div>
            <ReviewBlock/>
        </div>
    );
};

export default ReviewForm;

import React from "react";
import styles from "./ReviewBlock.module.scss";
import Image from "next/image";
import like from "../../../SVG/Like/Like.svg";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const ReviewBlock = () => {
    return (
        <div className={styles.ReviewBlock}>
            <div className={styles.ReviewBlock__avatar}>
                <Image alt="" width={25} height={25} src={"https://thumbs.dfs.ivi.ru/storage30/contents/c/5/843a783bc2920f4980fe1f0d77a6ff.jpg/44x44/?q=85"} />
            </div>
            <div className={styles.ReviewBlock__info}>
                <div className={styles.ReviewBlock__header}>
                    <div className={styles.User}>Evegeny</div>
                    <div className={styles.Date}>16 января 2022</div>
                </div>
                <div className={styles.ReviewBlock__text}>
                    <p>
                        о том, что мир, бог и любовь есть в каждом из нас и
                        тратить время на суету и не бороться за правду - грешно!
                    </p>
                </div>
            </div>
            <div className={styles.ReviewBlock__mark}>
                <div className={styles.Like}>
                    <BsHandThumbsUp/>
                </div>
                <div>1</div>
                <div className={styles.Dislike}>
                    <BsHandThumbsDown/>
                </div>
            </div>
        </div>
    );
};

export default ReviewBlock;

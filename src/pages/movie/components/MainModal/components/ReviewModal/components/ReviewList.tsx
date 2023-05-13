import styles from "./ReviewList.module.scss";
import React from "react";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

export interface IElem{
    date: string;
    user?: string;
    title: string
}

interface MovieListItemProps {
    elem: IElem;
    callback: () => void;
}

export default function ReviewList({ elem, callback }: MovieListItemProps) {
    return (
        <div className={styles.ReviewList} onClick={callback}>
            <div className={styles.ReviewList__user} >
                <p>{elem?.user}user1</p>
            </div>
            <div className={styles.ReviewList__title}>{elem?.title}</div>
            <div className={styles.ReviewList__down}>
                <div className={styles.ReviewList__date}>123{elem?.date}</div>
                <div className={styles.ReviewList__mark}>
                    <BsHandThumbsUp/>
                    <p>36</p>
                    <BsHandThumbsDown/>
                </div>
            </div>
        </div>
    );
}

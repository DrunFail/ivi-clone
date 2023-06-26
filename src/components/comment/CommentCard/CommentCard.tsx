import styles from "./CommentCard.module.scss";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";
import { CommentItem } from "../../../models/global";


interface CommentCardProps {
    elem: CommentItem;
    callback: () => void;
}

export default function CommentCard({ elem, callback }: CommentCardProps) {
    return (
        <div className={styles.container} onClick={callback}>
            <div className={styles.container__user} >
                <p>{elem?.name}</p>
            </div>
            <div className={styles.container__title}>{elem?.text}</div>
            <div className={styles.container__down}>
                <div className={styles.container__date}>{elem?.createdAt}</div>
                <div className={styles.container__mark}>
                    <BsHandThumbsUp />
                    <p>36</p>
                    <BsHandThumbsDown />
                </div>
            </div>
        </div>
    );
}

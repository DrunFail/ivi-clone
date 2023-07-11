import Image from "next/image";
import styles from "./CommentList.module.scss";
import { CommentItem } from "../../../models/global";
import CommentLikeCounter from "../CommentLikeCounter/CommentLikeCounter";
import CommentBody from "../CommentBody/CommentBody";
import CommentDateCreated from "../CommentDateCreated/CommentDateCreated";
import CommentUserName from "../CommentUserName/CommentUserName";

interface CommentListProps {
    commentData: CommentItem[]
}
export default function CommentList({ commentData }: CommentListProps) {
    return (
        //<div className={styles.ReviewBlock}>
        //    <div className={styles.ReviewBlock__avatar}>
        //        <Image alt="" width={25} height={25} src={"https://thumbs.dfs.ivi.ru/storage30/contents/c/5/843a783bc2920f4980fe1f0d77a6ff.jpg/44x44/?q=85"} />
        //    </div>
        //    <div className={styles.ReviewBlock__info}>
        //        <div className={styles.ReviewBlock__header}>

        //            <CommentUserName />
        //            <CommentDateCreated />
        //        </div>

        //        <CommentBody />
        //    </div>

        //    <CommentLikeCounter />
        //</div>

        <div className={styles.container}>
            <div className={styles.name }>
                <CommentUserName />
            </div>
            <div className={styles.date }>
                <CommentDateCreated />
            </div>
            <div className={styles.counter }>
                <CommentLikeCounter />
            </div>
            <div className={styles.comment }>
                <CommentBody />
            </div>
            
        </div>
    );
}
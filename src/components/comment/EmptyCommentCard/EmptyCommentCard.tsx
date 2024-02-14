import { FormattedMessage } from "react-intl";
import styles from "./EmptyCommentCard.module.scss";

interface EmptyCommentCardProps {
    variant: "slider" | "list"
}
export default function EmptyCommentCard({variant }:EmptyCommentCardProps) {
    return (
        <div className={`${styles[variant]}`}>
            <FormattedMessage id="comment.empty"/>
        </div>
    );
}
import FontIcon from "../../../UI/FontIcon/FontIcon";
import styles from "./SelectedSort.module.scss";

interface Props {
    currentSortVariant: string
}
export default function SelectedSort({ currentSortVariant }: Props) {
    return (
        <div className={styles.container} >
            <FontIcon variant="filter" />
            <span id="select-orderBy">
                {currentSortVariant}
            </span>
            <FontIcon variant="arrowDown" size={8} />
        </div>
    );
}
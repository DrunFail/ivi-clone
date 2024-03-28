import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./RatingProgressBarBlock.module.scss";

export default function RatingProgressBarBlock() {
    return (
        <div className={styles.progressbar}>
            <ProgressBar size={2} fillPercentage={50} />
            <ProgressBar size={2} fillPercentage={50} />
            <ProgressBar size={2} fillPercentage={50} />
            <ProgressBar size={2} fillPercentage={50} />
        </div>
    );
}
import styles from "./ProgressBar.module.scss";

interface ProgressBarProps {
    size: 2 | 4,
    fillPercentage?: number
}

export default function ProgressBar({ size, fillPercentage = 0 }: ProgressBarProps) {
    return (
        <div className={styles[`progressbar${size}`]}>
            <div
                className={styles.active}
                style={{ width: `${fillPercentage}%` }}>
            </div>
        </div>
    );
}

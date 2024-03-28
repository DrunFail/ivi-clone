import ProgressBar from "../../ProgressBar/ProgressBar";
import styles from "./MainAdvantage.module.scss";

interface MainAdvantageProps {
    nameAdvantage: string,
    fillPercentage: number
}

export default function MainAdvantage({ nameAdvantage, fillPercentage }: MainAdvantageProps) {
    return (
        <div className={styles.advantage}>
            <p>{nameAdvantage}</p>
            <ProgressBar
                size={4}
                fillPercentage={fillPercentage} />
        </div>

    );
}

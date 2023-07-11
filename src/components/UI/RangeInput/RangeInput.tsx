import { HTMLAttributes, useEffect } from "react";
import styles from "./RangeInput.module.scss";

interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
    testId: string;
    initValue: number;
    min: number;
    max: number;
    step: number;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function RangeInput({ testId, initValue, min, max, step,changeHandler, ...props }: RangeInputProps) {

    useEffect(() => {
            const input = document.getElementById(testId);
            const percent = (initValue / max * 100).toFixed();
            input?.style.setProperty("--track", `${percent.toString()}%`)
    }, [initValue])


    return (
        <input
            className={styles.input}
            type="range"
            id={testId}
            name={testId}
            value={initValue}
            min={min}
            max={max}
            step={step}
            onChange={changeHandler }
            {...props }
        />
    );
}
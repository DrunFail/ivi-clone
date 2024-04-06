import { HTMLAttributes, useEffect } from "react";
import styles from "./RangeInput.module.scss";

interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
    inputId: string;
    initValue: number;
    min: number;
    max: number;
    step: number;
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void
}
export default function RangeInput({ inputId, initValue, min, max, step,changeHandler, ...props }: RangeInputProps) {

    useEffect(() => {
            const input = document.getElementById(inputId);
            const percent = (initValue / max * 100).toFixed();
            input?.style.setProperty("--track", `${percent.toString()}%`)
    }, [initValue])


    return (
        <input
            className={styles.input}
            type="range"
            id={inputId}
            name={inputId}
            value={initValue}
            min={min}
            max={max}
            step={step}
            onChange={changeHandler }
            {...props }
        />
    );
}
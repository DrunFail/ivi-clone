'use client';

import { HTMLAttributes, useEffect } from 'react';
import './RangeInput.scss';

interface RangeInputProps extends HTMLAttributes<HTMLInputElement> {
    inputId: string;
    initValue?: number;
    min: number;
    max: number;
    step: number;
    changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function RangeInput({ inputId, min, max, step, changeHandler, ...props }: RangeInputProps) {
    useEffect(() => {
        const input = document.getElementById(inputId) as HTMLInputElement;
        const change = () => {
            const value = (+input.value / max) * 100;
            input.style.background = `linear-gradient(to right, #ea003d ${value}%,#a5a1b2 ${value}%)`;
        };
        input.addEventListener('input', change);
    }, [inputId, max]);

    return (
        <input
            type="range"
            id={inputId}
            name={inputId}
            min={min}
            max={max}
            step={step}
            onChange={changeHandler}
            {...props}
        />
    );
}

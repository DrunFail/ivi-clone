import React, { FC, useTransition } from "react";
import styles from "./MyInput.module.scss";

interface MyInputProps {
    callback?: (e: any) => void;
    placeholder?: string | React.ReactNode;
}

export default function MyInput({ callback, placeholder, ...props }:MyInputProps){
    const [isPending, startTransition] = useTransition();
    const fn = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (callback) {
            startTransition(() => {
                callback(e.target.value);
            });
        }
    };

    return (
        <div className={styles.MyInput}>
            <input
                {...props}
                onChange={(e) => {
                    fn(e);
                }}
                placeholder={String(placeholder) || "Поиск..."}
            />
        </div>
    );
};


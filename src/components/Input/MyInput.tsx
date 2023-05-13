import React, { FC, useTransition } from "react";
import styles from "./MyInput.module.scss";
import { IMyInput } from "./models/IMyInput";

const MyInput: FC<IMyInput> = ({ callback, placeholder }, props) => {
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

export default MyInput;

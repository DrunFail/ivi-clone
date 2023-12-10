import { useTransition } from "react";
import styles from "./MyInput.module.scss";
import { FormattedMessage } from "react-intl";

interface MyInputProps {
    callback?: (e: any) => void;
    placeholder?: string | React.ReactNode;
    placeholderId: string
}

export default function MyInput({ callback, placeholder,placeholderId, ...props }:MyInputProps){
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
            <FormattedMessage id={placeholderId}>
                {placeholder => <input
                    {...props}
                    onChange={(e) => {
                        fn(e);
                    }}
                    placeholder={placeholder}
                />}
           
            </FormattedMessage>
        </div>
    );
};


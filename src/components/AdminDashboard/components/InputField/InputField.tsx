import { FormattedMessage } from "react-intl";
import styles from "./InputField.module.scss";

interface InputFieldProps {
    intlId: string,
    value: string,
    name: string,
    changeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void,
    error?: string 
}

export default function InputField({ intlId, value, changeHandler, name,error  }: InputFieldProps) {
    
    return (
        <div>
        <div className={styles.input}>
            <label><FormattedMessage id={intlId} /></label>
            <input type="text" name={name} value={value} onChange={changeHandler} />
            </div>
            <p style={{ textAlign: "end", height: "16px" , paddingBlockStart: "4px"}}>{error && <FormattedMessage id={`error.${error}`} />}</p>
        </div>
    );
}
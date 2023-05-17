import styles from "./MyButton.module.scss";
import { HTMLAttributes } from "react";

interface MyButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    type: "button" | "submit";
    bg_color?: "gradient" | "footer" | "pink";
    size?: "mini" | "large" | "medium";
    figure?: "circle" | "square";
}

export default function MyButton({ children, bg_color = "gradient", size, figure, type,className, ...props }: MyButtonProps) {
    const defaultClasses = `
    ${styles.MyButton}
    ${styles[bg_color]}
    ${styles[size || ""]}
    ${styles[figure || ""]}`


    const mergeClasses = defaultClasses + ' ' + (className ?? " ")
   

    return (
        <button
            type={type}
            className={mergeClasses}
            {...props}
        >
            {children}
        </button>
    );
};



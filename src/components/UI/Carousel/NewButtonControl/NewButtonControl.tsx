import styles from "./NewButtonControl.module.scss";

interface ButtonControlProps extends React.HTMLAttributes<HTMLButtonElement> {
   direction: "left" | "right"
}
export default function NewButtonControl({ children,direction, ...props }: ButtonControlProps) {
    return (
        <button
            className={styles[`button_${direction}`]}
            type='button'
            {...props }
        >
            {children}
        </button>
    );
}

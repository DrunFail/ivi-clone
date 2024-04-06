import styles from "./NewButtonControl.module.scss";

interface ButtonControlProps extends React.HTMLAttributes<HTMLButtonElement> {
   direction: "left" | "right"
}
export default function NewButtonControl({ children,direction, ...props }: ButtonControlProps) {
    return (
        <button
            className={styles[`button_${direction}`]}
            type='button'
            aria-label={direction === "left" ? "предыдущий слайд" : "следующий слайд" }
            {...props }
        >
            {children}
        </button>
    );
}

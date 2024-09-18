import styles from "./PositionContainer.module.scss";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode,
}
export default function PositionContainer({ children, ...props }: Props) {
    
    return (
        <div className={styles.container} {...props }>
            {children}
        </div>
    );
}
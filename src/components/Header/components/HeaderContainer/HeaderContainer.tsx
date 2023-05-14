import styles from "./HeaderContainer.module.scss";

interface HeaderContainerProps {
    children: React.ReactNode
}

export default function HeaderContainer({ children }: HeaderContainerProps) {
    return (
        <header>
            <div className={styles.wrapper }>

                {children}
            </div>
        </header>
    );
}
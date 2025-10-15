import styles from './ButtonTopContainer.module.scss';

export default function ButtonTopContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className={styles.container} data-testId="btn-sub-humb">
            {children}
        </div>
    );
}

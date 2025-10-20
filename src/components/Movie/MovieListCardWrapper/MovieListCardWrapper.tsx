import styles from './MovieListCardWrapper.module.scss';

export default function MovieListCardWrapper({ children }: { children: React.ReactNode }) {
    return <div className={styles.wrapper}>{children}</div>;
}

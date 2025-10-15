import styles from './MovieDescription.module.scss';

export default function MovieDescription({ children, isHide = false }: { children: string; isHide?: boolean }) {
    return <p className={`${styles[isHide ? 'hide' : 'show']} `}>{children}</p>;
}

import styles from './FontIcon.module.scss';

export type FontIconVariant =
    | 'search'
    | 'home'
    | 'catalog'
    | 'tv'
    | 'dots'
    | 'close'
    | 'diamond'
    | 'reward'
    | 'purchases'
    | 'bookmark'
    | 'watch'
    | 'payment'
    | 'invite'
    | 'avatar'
    | 'bookmark2'
    | 'arrow'
    | 'magic_wand'
    | 'star'
    | 'eye'
    | 'phone'
    | 'mail'
    | 'close'
    | 'arrowDown'
    | 'arrowUp'
    | 'arrowRight'
    | 'arrowLeft'
    | 'megaphon'
    | 'thumbsUp'
    | 'thumbsDown'
    | 'reply'
    | 'filter';

interface FontIconProps {
    size?: 6 | 8 | 12 | 16 | 20 | 32 | 64;
    variant: FontIconVariant;
}

export default function FontIcon({ variant, size = 16 }: FontIconProps) {
    return <div className={`${styles.icon} ${styles[variant]}  ${styles['size_' + size]}`}></div>;
}

import styles from './EmptyCommentCard.module.scss';
import { useTranslations } from 'next-intl';

interface EmptyCommentCardProps {
    variant: 'slider' | 'list';
}

export default function EmptyCommentCard({ variant }: EmptyCommentCardProps) {
    const t = useTranslations();
    return <div className={`${styles[variant]}`}>{t('comment.empty')}</div>;
}

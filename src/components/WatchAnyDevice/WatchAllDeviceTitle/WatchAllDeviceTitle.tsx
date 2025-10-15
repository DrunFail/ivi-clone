import SectionTitle from '../../UI/SectionTitle/SectionTitle';
import { useTranslations } from 'next-intl';

export default function WatchAllDeviceTitle({ movieName }: { movieName: string }) {
    const t = useTranslations();
    return <SectionTitle>{t('WatchOnAllDevices', { value: movieName })}</SectionTitle>;
}

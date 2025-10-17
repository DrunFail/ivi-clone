import Image from 'next/image';
import logo from '../../../../assets/SVG/Logo/ivi-logo.svg';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function HeaderLogo() {
    const t = useTranslations('image');
    return (
        <Link href="/" data-testid="header-home-link" title={t('logoTitle')}>
            <Image src={logo} alt={t('logo')} height={48} width={66} />
        </Link>
    );
}

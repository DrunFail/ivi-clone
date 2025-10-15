import Button from '../../UI/core/Button/Button';
import { useTranslations } from 'next-intl';

export default function LinkConnectDevice() {
    const t = useTranslations();
    return (
        <Button as="link" href="https://www.ivi.ru/devices" color="red">
            {t('ConnectDevice')}
        </Button>
    );
}

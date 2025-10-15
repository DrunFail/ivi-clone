import { useFormStatus } from 'react-dom';
import Button from '../../../UI/core/Button/Button';
import { useTranslations } from 'next-intl';

export default function SubmitButton() {
    const { pending } = useFormStatus();
    const t = useTranslations();
    return (
        <Button as="button" color="red" type="submit" disabled={pending} aria-disabled={pending}>
            {pending ? t('auth.btnSubmitRequest') : t('auth.submit')}
        </Button>
    );
}

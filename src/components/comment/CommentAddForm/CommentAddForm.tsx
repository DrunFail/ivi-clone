'use client';

import styles from './CommentAddForm.module.scss';
import TextFieldWithLabel from '../../UI/TextFieldWithLabel/TextFieldWithLabel';
import Button from '../../UI/core/Button/Button';
import { useTranslations } from 'next-intl';
import TextFieldErrorMessage from '../../auth/components/TextFieldErrorMessage/TextFieldErrorMessage';

interface CommentAddFormProps {
    movieKinopoiskId: number;
    parentId?: number;
    inputId: string;
    action?: (formData: FormData) => void;
    error: string[] | undefined;
}
export default function CommentAddForm({ movieKinopoiskId, parentId, inputId, action, error }: CommentAddFormProps) {
    const t = useTranslations();

    return (
        <form className={styles.form} action={action} noValidate>
            <input type="hidden" name="filmId" value={movieKinopoiskId} />
            <input type="hidden" name="parentId" value={parentId} />
            <TextFieldErrorMessage error={error}>
                <TextFieldWithLabel id={inputId} labelText={t('comment.inputLabel')} name="commentText" />
            </TextFieldErrorMessage>
            <Button color="red" type="submit">
                {t('Send')}
            </Button>
        </form>
    );
}

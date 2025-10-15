import styles from './TextFieldErrorMessage.module.scss';

export default function TextFieldErrorMessage({
    children,
    error,
    isHiddenInput = false,
}: {
    children: React.ReactNode;
    error: React.ReactNode;
    isHiddenInput?: boolean;
}) {
    const defaultClasses = `  ${styles[error ? 'active' : 'error']}
            ${styles[isHiddenInput ? 'hidden' : 'visible']}`;

    return (
        <div className={defaultClasses}>
            {children}
            {error && <span>{error}</span>}
        </div>
    );
}

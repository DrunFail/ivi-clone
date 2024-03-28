import Button from "../../UI/core/Button/Button";
import styles from "./EditCardContainer.module.scss";
import MemoizedFormattedMessage from "react-intl/src/components/message";

interface EditCardContainerProps {
    children: React.ReactNode,
    handleCloseEdit: () => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function EditCardContainer({children,handleCloseEdit, handleSubmit }:EditCardContainerProps) {
    return (
        <form className={styles.container} onSubmit={handleSubmit }>
            {children}

            <div className={styles.buttonContainer}>
                <Button
                    as="button"
                    type="button"
                    onClick={handleCloseEdit}
                >
                    <MemoizedFormattedMessage id="button.cancel" />
                </Button>
                <Button
                    as="button"
                    color="red"
                    type="submit"
                >
                    Продолжить
                </Button>
            </div>
        </form>
    );
}
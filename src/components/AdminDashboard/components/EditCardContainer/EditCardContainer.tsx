import React from "react";
import { FormattedMessage } from "react-intl";
import ButtonContainer from "../ButtonContainer/ButtonContainer";
import styles from "./EditCardContainer.module.scss";

interface EditCardContainerProps {
    children: React.ReactNode,
    handleCloseEdit: () => void,
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

export default function EditCardContainer({children,handleCloseEdit, handleSubmit }:EditCardContainerProps) {
    return (
        <form className={styles.container} onSubmit={handleSubmit }>
            {children}

            <ButtonContainer>
                <button type='button' onClick={handleCloseEdit}><FormattedMessage id="button.cancel" /></button>
                <button type='submit'><FormattedMessage id="button.confirm" /></button>
            </ButtonContainer>
        </form>
    );
}
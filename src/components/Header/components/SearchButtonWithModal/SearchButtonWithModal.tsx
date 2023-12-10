import { useState } from "react";
import styles from "./SearchButtonWithModal.module.scss";
import SearchModal from "../../../modals/SearchModal/SearchModal";

interface SearchButtonWithModalProps {
    children: React.ReactNode
}

export default function SearchButtonWithModal({ children }: SearchButtonWithModalProps) {
    const [visible, setVisible] = useState(false);

    const handleVisible = () => {
        setVisible(visible => !visible)
    }

    return (
        <>
            <div className={styles.button}  onClick={handleVisible} data-testid='btn-search'>
                {children }
            </div> 
                
            
            <SearchModal
                visible={visible}
                handleVisible={handleVisible} />
        </>
    );
};

import { useState } from "react";
import styles from "./SearchWithModal.module.scss";
import { FormattedMessage } from "react-intl";
import { BsSearch } from "react-icons/bs";
import SearchModal from "../SearchModal/SearchModal";


export default function SearchWithModal({ custom=false, children }: {custom?: boolean, children: React.ReactNode}) {
    const [visible, setVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setVisible(visible => !visible)
    }

    return (
        <>
            <div
                className={styles[custom ? "" : "SearchWindow__div"]}
                onClick={handleVisible}
            >
                {children }
            </div> 
                
            
            <SearchModal
                visible={visible}
                handleVisible={handleVisible} />
        </>
    );
};

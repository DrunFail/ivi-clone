import { useState } from "react";
import styles from "./SearchWithModal.module.scss";
import { FormattedMessage } from "react-intl";
import { BsSearch } from "react-icons/bs";
import SearchModal from "../SearchModal/SearchModal";


export default function SearchWithModal() {
    const [visible, setVisible] = useState<boolean>(false);

    const handleVisible = () => {
        setVisible(visible => !visible)
    }

    return (
        <div className={styles.SearchWindow}>
            <div
                className={styles.SearchWindow__div}
                onClick={handleVisible}
            >
                <BsSearch />
                <p>
                    {" "}
                    <FormattedMessage id="Search" />
                </p>
            </div>
            <SearchModal
                visible={visible}
                handleVisible={handleVisible} />
        </div>
    );
};

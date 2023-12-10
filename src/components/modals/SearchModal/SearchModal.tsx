import { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./SearchModal.module.scss";
import DefaultSearchResult from "./components/DefaultSearchResult/DefaultSearchResult";
import SearchResult from "./components/SearchResult/SearchResult";
import Modal from "../../UI/Modal/Modal";
import MyInput from "../../UI/MyInput/MyInput";
import { IData } from "../../../models/IApi";
import { IMovieOne } from "../../../models";
import { trotl } from "../../../api/searchApi";

interface SearchModalProps {
    visible: boolean,
    handleVisible: () => void
}
export default function SearchModal({visible, handleVisible }: SearchModalProps) {
    const [search, setSearch] = useState<IMovieOne[]>();
    const searchFn = async (query: string) => {
        const res: IData<IMovieOne[]> | undefined = await trotl(query);
        setSearch(res?.data);
    };
    return (
        <Modal callback={handleVisible} visible={visible}>
            <div className={styles.container}>
                <h1>
                    <FormattedMessage id="Search" />
                </h1>

                <MyInput
                    callback={(e: string) => searchFn(e)}
                    placeholderId="Search"
                    />

                {!search?.length
                    ? <DefaultSearchResult />
                    : <SearchResult search={search} handleModalClose={handleVisible} />}
            </div>
        </Modal>
    );
}
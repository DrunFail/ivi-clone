import { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./SearchModal.module.scss";
import DefaultSearchResult from "./components/DefaultSearchResult/DefaultSearchResult";
import SearchResult from "./components/SearchResult/SearchResult";
import Modal from "../../UI/Modal/Modal";
import MyInput from "../../UI/MyInput/MyInput";
import { MovieAPI } from "../../../api/MovieAPI";
import { MovieSuggest } from "../../../models/types";

interface SearchModalProps {
    visible: boolean,
    handleVisible: () => void
}
export default function SearchModal({visible, handleVisible }: SearchModalProps) {
    const [search, setSearch] = useState<MovieSuggest[]>();
    const searchFn = async (query: string) => {
        const response = await MovieAPI.getMovieListByName(query)
        setSearch(response)
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
import { useState } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./SearchModal.module.scss";
import Modal from "../UI/Modal/Modal";
import TextFieldWithLabel from "../UI/TextFieldWithLabel/TextFieldWithLabel";
import DefaultSearchResult from "./DefaultSearchResult/DefaultSearchResult";
import SearchResult from "./SearchResult/SearchResult";
import { MovieSuggest } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";

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

                <TextFieldWithLabel
                    id="search"
                    onChange={(e) => searchFn((e.target as HTMLInputElement).value)}
                    labelText={<FormattedMessage id="Search" />}
                />

                {!search?.length
                    ? <DefaultSearchResult />
                    : <SearchResult search={search} handleModalClose={handleVisible} />}
            </div>
        </Modal>
    );
}
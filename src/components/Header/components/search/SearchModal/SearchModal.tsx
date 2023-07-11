import { useState } from "react";
import { FormattedMessage } from "react-intl";
import { useSelector } from "react-redux";
import { trotl } from "../../../../../api/searchApi";
import { IMovieOne } from "../../../../../models";
import { IData } from "../../../../../models/IApi";
import { getLang } from "../../../../../store/switchLang";
import Modal from "../../../../UI/Modal/Modal";
import MyInput from "../../../../UI/MyInput/MyInput";
import DefaultSearchResult from "../DefaultSearchResult/DefaultSearchResult";
import SearchResult from "../SearchResult/SearchResult";
import styles from "./SearchModal.module.scss";

interface SearchModalProps {
    visible: boolean,
    handleVisible: () => void
}
export default function SearchModal({visible, handleVisible }: SearchModalProps) {
    
    const lang = useSelector(getLang());
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
                    placeholder={lang === "Ru" ? "Поиск" : "Search"}
                />


                {!search?.length
                    ? <DefaultSearchResult />
                    : <SearchResult search={search} />}
            </div>
        </Modal>
    );
}
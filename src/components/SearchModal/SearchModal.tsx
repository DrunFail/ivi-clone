"use client";

import { useState } from "react";
import styles from "./SearchModal.module.scss";
import TextFieldWithLabel from "../UI/TextFieldWithLabel/TextFieldWithLabel";
import DefaultSearchResult from "./DefaultSearchResult/DefaultSearchResult";
import SearchResult from "./SearchResult/SearchResult";
import { MovieSuggest } from "../../models/types";
import { MovieAPI } from "../../api/MovieAPI";
import { useTranslations } from "next-intl";
import SearchResultCard from "./SearchResultCard/SearchResultCard";
import { Link } from "@/i18n/navigation";

interface SearchModalProps {

}
export default function SearchModal({ }: SearchModalProps) {
    const [search, setSearch] = useState<MovieSuggest[]>();
    const t = useTranslations();

    const searchFn = async (query: string) => {
        const response = await MovieAPI.getMovieListByName(query)
        setSearch(response)
    };
    return (

        <div className={styles.container}>
            <h1>
                {t("Search")}

            </h1>

            <TextFieldWithLabel
                id="search"
                onChange={(e) => searchFn((e.target as HTMLInputElement).value)}
                labelText={t("Search")}
            />

            {!search?.length
                ? <DefaultSearchResult />
                : <SearchResult>
                    {search.map(({ nameRu, year, kinopoiskId }) => (
                        <Link href={`/movie/${kinopoiskId}`} key={kinopoiskId}>
                            <SearchResultCard
                                name={nameRu}
                                year={year}
                            />
                        </Link>
                    ))}
                </SearchResult>
            }
        </div>

    );
}
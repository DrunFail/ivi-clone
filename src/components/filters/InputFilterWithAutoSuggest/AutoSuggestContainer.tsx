"use client";

import styles from "./AutoSuggestContainer.module.scss";
import SuggestContent from "./SuggestContent/SuggestContent";
import PositionContainer from "../../UI/filter/PositionContainer/PositionContainer";
import FilterWrapperContainer from "../../UI/filter/FilterWrapperContainer/FilterWrapperContainer";
import { useEffect, useRef, useState } from "react";
import { PersonSuggest } from "../../../models/types";
import { NewPersonAPI } from "../../../api/newPersonAPI";

interface InputFilterProps {
    filterKey: string,
    children?: React.ReactNode
}

export default function AutoSuggestContainer({ filterKey,children }: InputFilterProps) {
    const [suggestions, setSuggestions] = useState<PersonSuggest[]>([]);
    const superRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (superRef.current) {
            const resetButton = superRef.current.querySelector('button[id=reset]') as HTMLButtonElement;
            const input = superRef.current?.querySelector('input[type=text]') as HTMLInputElement;
            const clear = () => {
                setSuggestions([]);
                input.value = '';
            }
            resetButton.addEventListener('click', clear);
        }
    },[filterKey])

    const setSort = async (e: any) => {
        console.log(e)
        if (e.target.type === "text") {
            e.stopPropagation();
            try {
                const responseSuggest = await NewPersonAPI.getPersonSuggest({ profession: "актер", name: e.target.value, size: 6 })
                setSuggestions(responseSuggest.rows);
            } catch (error) {
                console.log(error)
            }
        }
        if ( e.target.name === filterKey) {
            const person = e.target.dataset.personName as string;
            const targetElement = document.getElementById(`selected-${filterKey}`) as HTMLSpanElement;
            targetElement.innerHTML = person;
        }
    }

    return (
        <div className={styles.wrapper} ref={superRef} onChange={(e) => setSort(e)}>
            {children }
            <div className={styles.variants}>
                {!!suggestions.length &&
                    <PositionContainer>
                        <FilterWrapperContainer>
                            <SuggestContent
                                suggestList={suggestions}
                                filterKey={filterKey }
                            />
                        </FilterWrapperContainer>
                    </PositionContainer>
                }
            </div>

        </div >
    );
};

import { useEffect, useRef, useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import useOutsideClick from "../../../hooks/useOutsideClick";
import ButtonClose from "../../UI/ButtonClose/ButtonClose";
import FilterInput from "../../UI/FilterInput/FilterInput";
import BackgroundContainer from "../components/BackgroundContainer/BackgroundContainer";
import FilterName from "../components/FilterName/FilterName";
import PositionContainer from "../components/PositionContainer/PositionContainer";
import SelectedFilterValue from "../components/SelectedFilterValue/SelectedFilterValue";
import styles from "./InputFilterWithAutoSuggest.module.scss";
import SuggestContent from "./SuggestContent/SuggestContent";
import { PersonSuggest } from "../../../models/types";
import { NewPersonAPI } from "../../../api/newPersonAPI";

interface InputFilterProps {
    testHandler: (filterKey: string, filterValue: string | number) => void;
    testId: "actorId" | "directorId",
    currentId: number | null,
}

const profession = {
    actorId: "актер",
    directorId: "режиссер"
}
export default function InputFilterWithAutoSuggest({ testHandler, testId, currentId }: InputFilterProps) {
    const [suggestions, setSuggestions] = useState<PersonSuggest[]>([]);
    const [isOpen, setIsOpen] = useState(false);
    const [queryParams, setQueryParams] = useState({ profession: profession[testId], name: "", size: 6 });
    const [selected, setSelected] = useState<PersonSuggest | null>(null)
    const debouncedQueryParams = useDebounce(queryParams, 300);


    useEffect(() => {
        if (queryParams.name) {
            const fetchPersons = async (params: typeof debouncedQueryParams) => {
                try {
                    const response = await NewPersonAPI.getPersonSuggest(params)
                    setSuggestions(response.rows)
                } catch (error) {
                    console.log(error)
                }
            }
            fetchPersons(debouncedQueryParams)
        }
    }, [debouncedQueryParams.name])




    function handleFocus(): void {
        setIsOpen(true);
    }
    function handleBlur(): void {
        setIsOpen(false);

    }
    const inputContainerRef = useRef(null);
    useOutsideClick(inputContainerRef, handleBlur)


    const handleClick = (suggestion: PersonSuggest) => {
        setQueryParams({ ...queryParams, name: suggestion.nameRu })
        testHandler(testId, suggestion.personId);
        setSelected(suggestion)
        setIsOpen(false);
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQueryParams({ ...queryParams, name: e.target.value })
    }

    const handleClearParams = () => {
        testHandler(testId, "");
        setQueryParams({ ...queryParams, name: "" });
        setSuggestions([])
        setSelected(null)
    }

    return (
        <div className={styles.wrapper} >
            <FilterName intlId={testId} />
            {currentId
                ? <div style={{ display: "flex", alignItems: "center" }}>
                    <SelectedFilterValue
                        variant={"value"}
                        intlId={selected?.nameRu ?? ""}
                    />
                    <ButtonClose
                        style={{ blockSize: "20px", inlineSize: "20px", fontSize: "16px" }}
                        onClick={handleClearParams}
                    />
                </div>
                :
                <div ref={inputContainerRef} style={{ position: "relative", inlineSize: "100%", blockSize: "100%" }}>
                    <FilterInput
                        id={testId}
                        value={queryParams.name}
                        onChange={handleChange}
                        onFocus={handleFocus}

                    />
                    {isOpen && suggestions.length > 0 &&
                        <PositionContainer variant="content">
                            <BackgroundContainer>
                                <SuggestContent
                                    suggestList={suggestions}
                                    handler={handleClick} />
                            </BackgroundContainer>
                        </PositionContainer>
                    }
                </div>}
        </div >
    );
};
